//Model Cliente

import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";

const Personagens = connection.define('personagens', {
    

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type:Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        timestamps: false
    });

Personagens.sync({force: false});
export default Personagens;