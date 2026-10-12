// Arquivo com dados de conexão com o banco
//Importando Sequelize
import Sequelize from "sequelize";

const connection = new Sequelize({
    //Dados de Conexão
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password:'PCan255Cxx131@',
    database:'apotecaria',
    timezone:'-03:00',
});
//exportando o módulo
export default connection;