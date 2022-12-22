import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Task} from './Task.js';

//Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model.
//
//The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).
//
//A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. 
// Models can be defined in two equivalent ways in Sequelize:
// 	###Calling sequelize.define(modelName, attributes, options)
// 	Extending Model and calling init(attributes, options)

export const Project = sequelize.define('projects', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING
	},
	priority: {
		type: DataTypes.INTEGER
	},
	description: {
		type: DataTypes.STRING
	},
});

Project.hasMany(Task, {
	foreignKey: 'projectId',
	sourceKey: 'id'
});

Task.belongsTo(Project, {
	foreignKey: 'projectId',
	target: 'id'
});