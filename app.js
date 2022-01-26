import express from 'express';
import router from './routes/holidayRoutes.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use('/holidays', router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html')); // path.join to the directory name youare currrently in and the file you want to serve e.g index.html
});

app.listen(PORT, function() {
	console.log({ message: 'I am listening on port 3000' });
});
