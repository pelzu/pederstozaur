let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/pederstozaur'));

app.get('/*', (req, resp) => {
  resp.sendFile(__dirname + '/dist/pederstozaur/index.html');
});

app.listen(process.env.PORT || 8080)

