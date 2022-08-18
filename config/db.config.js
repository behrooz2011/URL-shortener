// require('dotenv').config();
// console.log(`${process.env.NEW_PASSWORD}`);
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD:`${process.env.NEW_PASSWORD}`,
    DB: "urldb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  //console.log("config");
// console.log(JSON.stringify(`${process.env.HOST}`));
// console.log(JSON.stringify(`${process.env.PASSWORD}`));
// module.exports = {
//     HOST: JSON.stringify(`${process.env.HOST}`),
//     USER: JSON.stringify(`${process.env.USER}`),
//     PASSWORD: JSON.stringify(`${process.env.PASSWORD}`),
//     DB: JSON.stringify(`${process.env.DB}`),
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };
