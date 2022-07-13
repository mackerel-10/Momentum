import express from "express";
import path from "path";

const app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
	const dirName = path.resolve();
	res.sendFile(path.join(dirName, '/index.html'));
});
app.listen(app.get('port'), () => {
	// app.get('port') => 설정된 포트번호 반환
	console.log(app.get('port'), 'Waiting...');
});
