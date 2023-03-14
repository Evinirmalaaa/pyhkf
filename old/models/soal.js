// const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Soal = sequelize.define('soal', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING,
        },
        nomor: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        soal: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        option_a: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        option_b: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        option_c: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        key: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         // User belongsTo Company 1:1
                model: 'categories',
                key: 'id'
            }
        }
    });
    return Soal;
}