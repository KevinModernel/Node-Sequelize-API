import app from './app.js';
import { sequelize } from './database/database.js';


async function main() {
	try{ // .sync method is to synchronize your Sequelize model with your database tables.
		await sequelize.sync({force: false}); //Crea las tablas si no existen. Con el force:true borra lo que hay y vuelve a crear. Le pongo force: false para que no vuelva a crear las tablas cada vez que se vuelve a ejecutar el sv por nodemon.
		// await sequelize.authenticate(); // para probar que sequelize funciona. Funciona Ok.
		app.listen(3000); 
		console.log('Server is listening port 3000');
	} catch (e) {
		console.error('unable t connecto to the DB: ', e);
	}
};

main();


// Te podes conectar a sequelize