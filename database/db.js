import { Sequelize } from "sequelize";
const db = new Sequelize('barberia','admin','',{host: 'barberia.cvkws2ycimcf.us-east-1.rds.amazonaws.com', username:'admin', password:'123456878', dialect: 'mysql', port: 3307});
export default db