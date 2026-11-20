import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const base = process.env.TEST_URL || 'http://localhost:3000';
const langs = ['fa', 'en', 'ja'];
const pages = [];
const home = await fetch(base + '/fa');
assert.equal(home.status, 200);
const homeHtml = await home.text();
const slugs = [...new Set([...homeHtml.matchAll(/href="\/fa\/projects\/([a-z0-9-]+)"/g)].map(m=>m[1]))];
assert.equal(slugs.length, 9, 'Expected nine unique project pages');
const internal = new Set();
for (const lang of langs) {
  for (const suffix of ['', ...slugs.map(s=>'/projects/'+s)]) pages.push({lang, path:'/'+lang+suffix});
}
await Promise.all(pages.map(async ({lang,path})=>{
  const response = await fetch(base+path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.match(html, new RegExp('<html[^>]*lang="'+lang+'"'), path+' language');
  assert.match(html, new RegExp('<html[^>]*dir="'+(lang==='fa'?'rtl':'ltr')+'"'), path+' direction');
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, path+' main heading');
  assert.match(html, /id="main"/, path+' main content');
  if(path==='/'+lang || path.endsWith('/projects/smart-parking')) {
    assert.match(html, /id="research"/, path+' research section');
    assert.match(html, /href="\/research\/multinational-anpr.pdf" target="_blank"/, path+' read paper');
    assert.match(html, /href="\/research\/multinational-anpr.pdf" download="ramin-hamehpour-multinational-anpr.pdf"/, path+' download paper');
  }
  for(const other of langs) assert.ok(html.includes('href="'+path.replace(/^\/(fa|en|ja)/,'/'+other)+'"'), path+' language link '+other);
  for(const match of html.matchAll(/href="(\/[^"#]*)/g)) {
    const target=match[1].split('#')[0].replaceAll('&amp;','&');
    if(target) internal.add(target);
  }
}));
await Promise.all([...internal].map(async path=>{
  const response=await fetch(base+path);
  assert.equal(response.status,200,'Internal link '+path);
}));
const resume=await fetch(base+'/ramin-hamehpour-resume.pdf');
assert.match(resume.headers.get('content-type'),/pdf/);
assert.equal(new TextDecoder().decode((await resume.arrayBuffer()).slice(0,5)), '%PDF-');
const article=await fetch(base+'/research/multinational-anpr.pdf');
assert.equal(article.status,200);
assert.match(article.headers.get('content-type'),/pdf/);
assert.deepEqual(Buffer.from(await article.arrayBuffer()),await readFile(new URL('../public/research/multinational-anpr.pdf',import.meta.url)),'Original article PDF served unchanged');
const cover=await fetch(base+'/research/multinational-anpr-cover.webp');
assert.equal(cover.status,200);
assert.match(cover.headers.get('content-type'),/image\/webp/);
const root=await fetch(base+'/',{redirect:'manual'});
assert.equal(root.status,307);
assert.equal(root.headers.get('location'),'/fa');
assert.equal((await fetch(base+'/en/projects/missing-project')).status,404);
assert.equal((await fetch(base+'/de')).status,404);
console.log(`PASS: ${pages.length} localized pages, ${internal.size} internal resources, research links, original article PDF, cover, language links, resume, redirect, and 404 responses.`);
