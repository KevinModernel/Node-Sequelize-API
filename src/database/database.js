import Sequelize from 'sequelize';
/// To connect to the database, you must create a Sequelize instance.
/// Option 3: Passing parameters separately (other dialects)
//
///const sequelize = new Sequelize('database', 'username', 'password', {
///  host: 'localhost',
///  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
///});

export const sequelize =  new Sequelize(
	'projectsdb', 
	'postgres', 
	'password', 
	{
	host: 'localhost',
	dialect: 'postgres',
	}
);