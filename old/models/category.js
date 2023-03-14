module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nama: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Category;
}