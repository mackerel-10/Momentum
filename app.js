import express from "express";
import path from "path";
import dotenv from 'dotenv';

const app = express();
const dirName = path.resolve();

dotenv.config();

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
	res.sendFile(path.join(dirName, '/index.html'));
});
app.listen(app.get('port'), () => {
	// app.get('port') => 설정된 포트번호 반환
	console.log(app.get('port'), 'Waiting...');
});

app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('js'));

const API_KEY = process.env.API_KEY;
app.get('/get-weather-data', (req, res) => {
	const { lat, lon } = req.query;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url).then(response => response.json().then(data => {
		res.send(data);
	}));
})
