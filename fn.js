var item;
var newMsg = {};
for (item in msg.payload.data) {
    newMsg[msg.payload.data[item].name] = msg.payload.data[item].quotes.USD.price+' $';
}
msg.cryptos = newMsg;
return msg;