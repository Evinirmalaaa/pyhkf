const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAlias: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
}
)

const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.soal = require('./soal')(sequelize, Sequelize);
db.category = require('./category')(sequelize, Sequelize);

db.category.hasMany(db.soal, {
    foreignKey: 'id',
    as: 'soals'
})
db.soal.belongsTo(db.category, {
    foreignKey: 'id',
    as: 'categories'
})

module.exports = db;
