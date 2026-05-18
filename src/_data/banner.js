import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import markdownIt from 'markdown-it';

const __dirname = dirname(fileURLToPath(import.meta.url));
const content = readFileSync(join(__dirname, '..', 'banner.md'), 'utf8');

const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
const fm = {};
if (fmMatch) {
  for (const line of fmMatch[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    fm[line.slice(0, colonIdx).trim()] = line.slice(colonIdx + 1).trim();
  }
}

const md = markdownIt({ html: true, linkify: true });
const rawBody = fmMatch ? fmMatch[2].trim() : '';

export default {
  enabled: fm.enabled !== 'false',
  id: fm.id || 'banner',
  html: rawBody ? md.renderInline(rawBody) : '',
};
