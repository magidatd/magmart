import app from './app';
import config from './config/config';

app.listen(config.port, () => {
	console.log(`MagMart server is running on http://localhost:${config.port}`);
});
