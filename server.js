const WebSocket = require("ws");

// WebSocketサーバーの作成
const wss = new WebSocket.Server({ port: 8080 });

// 接続が確立されたときに呼ばれる関数
wss.on("connection", (ws) => {
  console.log("クライアントが接続されました");

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
