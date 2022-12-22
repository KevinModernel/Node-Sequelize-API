import app from './app.js';
import { sequelize } from './database/database.js';


async function main() {
	try{ 
		await sequelize.sync({force: false});
		app.listen(3000); 
		console.log('Server is listening port 3000');
	} catch (e) {
		console.error('unable t connecto to the DB: ', e);
	}
};

main();
