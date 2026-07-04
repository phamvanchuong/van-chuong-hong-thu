// Server tạm để test local, mô phỏng đúng hành vi GitHub Pages tại
// https://phamvanchuong.github.io/dam-cuoi/ (bao gồm việc trả 404.html
// cho các route như /dam-cuoi/anh-viet).
// Chạy: node serve-local.js  →  mở http://localhost:8642/dam-cuoi/
// File này không ảnh hưởng gì tới bản deploy trên GitHub Pages.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PREFIX = '/dam-cuoi';
const PORT = 8642;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.m4a': 'audio/mp4',
};

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let rel = null;
  if (urlPath === PREFIX || urlPath === PREFIX + '/') rel = 'index.html';
  else if (urlPath.startsWith(PREFIX + '/')) rel = urlPath.slice(PREFIX.length + 1);

  const file = rel ? path.join(ROOT, rel) : null;
  if (file && fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(fs.readFileSync(file));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(path.join(ROOT, '404.html')));
  }
}).listen(PORT, () => console.log(`Đang chạy tại http://localhost:${PORT}${PREFIX}/`));
