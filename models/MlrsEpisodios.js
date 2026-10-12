//Model MlrsEpisodios

import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";

const MlrsEpisodios = connection.define('mlrsEpisodios', {
    episodio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resumo:{
        type:Sequelize.STRING,
        allowNull: false
    },
},
{
    timestamps: false // <-- Desativa a busca por createdAt e updatedAt
});

MlrsEpisodios.sync({force: false});
export default MlrsEpisodios;