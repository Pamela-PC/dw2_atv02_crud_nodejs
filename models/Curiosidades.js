//Model Curiosidades

import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";

const Curiosidades = connection.define('curiosidades',{
    ordem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    curiosidade:{
        type:Sequelize.STRING,
        allowNull: false
}
});

Curiosidades.sync({force: false});
export default Curiosidades;