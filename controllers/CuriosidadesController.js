import express from 'express';
// Importando o model corretamente com o nome Curiosidades
import Curiosidades from '../models/Curiosidades.js';
const route = express.Router();

// Rota curiosidades
route.get("/curiosidades", function(req, res) {
    Curiosidades.findAll().then(curiosidades => {
        res.render("curiosidades", {
            curiosidades: curiosidades,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar as curiosidades. ERRO: ${error}`);
    });
});

// Rota de cadastro das curiosidades
route.post("/curiosidades/cadastrar", function(req, res) {
    const ordem = req.body.ordem;
    const curiosidade = req.body.curiosidade;
    
    Curiosidades.create({
        ordem: ordem,
        curiosidade: curiosidade,
    }).then(() => {
        res.redirect("/curiosidades");
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar uma curiosidade. ERRO: ${error}`);
    });
});

// ROTA EXCLUIR CURIOSIDADE
route.get("/curiosidades/excluir/:id", (req, res) => {
    const id = req.params.id;
    Curiosidades.destroy({
        where: {
            id: id,
        },
    }).then(() => {
        res.redirect("/curiosidades");
    }).catch(error => {
        console.log(`Ocorreu um erro ao excluir uma curiosidade. ERRO: ${error}`);
    });
});

// ROTA DE EDIÇÃO DE CURIOSIDADE
route.get("/curiosidades/editar/:id", (req, res) => {
    const id = req.params.id;
    Curiosidades.findByPk(id).then(curiosidades => {
        res.render("curiosidadesEditar", {
            curiosidades: curiosidades,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao buscar uma curiosidade. ERRO: ${error}`);
    });
});

// ROTA QUE ALTERA A CURIOSIDADE NO BD
route.post("/curiosidades/alterar", (req, res) => {
    const id = req.body.id;
    const ordem = req.body.ordem;
    const curiosidade = req.body.curiosidade;
    
    Curiosidades.update(
        {
            ordem: ordem,
            curiosidade: curiosidade,
        },
        {
            where: { id: id }
        }
    ).then(() => {
        res.redirect("/curiosidades");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar uma curiosidade. ERRO: ${error}`);
    });    
});

export default route;