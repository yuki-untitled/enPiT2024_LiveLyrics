//---------------------------------
// HTTPサーバー (express) + WebSocketサーバー
//---------------------------------

// ライブラリインポート
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const WebSocket = require("ws");

// WebSocketサーバーの作成
const wss = new WebSocket.Server({ server: http });

// WebSocket接続時の処理
wss.on("connection", (ws) => {
  console.log("クライアントが接続されました");

  // メッセージ受信時の処理
  ws.on("message", (message) => {
    console.log(`受信メッセージ: ${message}`);

    // 全てのクライアントにメッセージをブロードキャストする
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("クライアントが切断されました");
  });
});

// "/"にアクセスがあったらindex.htmlを返却
app.use("/", express.static(__dirname + "/"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// 3000番でサーバーを起動する
http.listen(3000, () => {
  console.log("listening on :3000");
});
