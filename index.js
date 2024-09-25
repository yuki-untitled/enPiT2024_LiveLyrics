//---------------------------------
// HTTPサーバー (express)
//---------------------------------
// ライブラリインポート
const express = require('express');
const app = express();
const http = require('http').createServer(app);

// "/"にアクセスがあったらindex.htmlを返却
app.use('/', express.static(__dirname + '/'));
app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

// 3000番でサーバーを起動する
http.listen(3000, ()=>{
  console.log("listening on :3000");
});
