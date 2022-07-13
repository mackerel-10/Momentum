import express from "express";
import path from "path";

const app = express();
const dirName = path.resolve();

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
	res.sendFile(path.join(dirName, '/index.html'));
});
app.listen(app.get('port'), () => {
	// app.get('port') => 설정된 포트번호 반환
	console.log(app.get('port'), 'Waiting...');
});

app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('img'));
