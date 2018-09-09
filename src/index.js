import http, { request } from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import api from './api';
import config from './config.json';
import cors from 'cors';
import path from 'path';

let app = express();
app.server = http.createServer(app);


app.use(bodyParser.json());
app.use(cors());
app.use('',express.static(path.join(__dirname, '../frontend/dist/frontend')))


// api router
app.use('/api', api());

app.get('*', function(req, res){
 res.sendFile("index.html", {"root": './frontend/dist/frontend'});
});

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
