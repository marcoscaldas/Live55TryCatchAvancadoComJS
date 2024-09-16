const WebSocket = require('ws');

function conectarWebSocket(url){

    let ws;
    try {
        ws = new WebSocket(url);
        ws.on('open', ()=>
             console.log('Conexão estabelecida'));

        ws.on('message', function (data){
            return  console.log('Mensagem recebida', data)});

        ws.on('error', (error)=>console.log('Erro na conexão',
           error.message 
        ) )

    } catch (error) {
        console.error('Erro ao conectar ao WebSocket: ', 
            error.message);
    }finally{
        if(ws){
            ws.on('close', ()=>
                 console.log('Conexão fechada.'));
        }else{
            console.log('WebSocket não foi inicializado'
                +' corretamente');
        }
    }
}
//conectarWebSocket('wss://ws.kraken.com');
conectarWebSocket('wss://echo.websocket.org');

