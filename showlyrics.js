//---------------------------------
// ファイル読み込み
//---------------------------------

const fs = require('fs');
const filePath = 'LyricsData/ito.txt';
let itoData;
try {
  itoData = fs.readFileSync(filePath, 'utf8');
} catch (err) {
  console.error(`ファイル読み込みエラー: ${err}`);
}

// lyricsdataタグに表示
document.getElementById('lyricsdata').innerHTML = itoData;