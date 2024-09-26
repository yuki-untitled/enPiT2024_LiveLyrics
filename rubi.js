const text=document.querySelector(`.lyrics`).innerText;

kuromoji.builder({ dicPath: "node_modules/kuromoji/dict/" }).build(function (err, tokenizer) {     if (err) throw err;     const tokens = tokenizer.tokenize(text);  // 取得したテキストを解析  
                                                                                              tokens.forEach(token => {         console.log(token.surface_form, token.reading); }); });