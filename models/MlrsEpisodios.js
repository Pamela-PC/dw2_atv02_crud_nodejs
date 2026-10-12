//Model MlrsEpisodios

import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";

const MlresEpisodios = connection.define('mlrsEpisodios', {
    episodio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resumo:{
        type:Sequelize.STRING,
        allowNull: false
    },

});

MlresEpisodios.sync({force: false});
export default MlresEpisodios;