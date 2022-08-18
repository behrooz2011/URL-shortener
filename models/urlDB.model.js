module.exports = (sequelize, Sequelize) => {
    const Url = sequelize.define("url_shortner", {
      id_u:{
        type: Sequelize.BIGINT, 
        primaryKey: true,
        autoIncrement: true
    },
      originalUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shortUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hashValue: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clicks:{
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    });
  
    return Url;
  };
  