import express from 'express';
//Importando o model
import MlrsEpisodios from "../models/MlrsEpisodios.js"
import { where } from 'sequelize';
const route = express.Router();


// ROTA MlrsEpisodios
route.get("/mlrsEpisodios",function(req,res){
   
    MlrsEpisodios.findAll().then(mlrsEpisodios=>{
        res.render("mlrsEpisodios", {
        
        mlrsEpisodios : mlrsEpisodios,
        });
    }).catch(error=>{
        console.log(`Ocorreu um erro a listar os melhores episodios. ERRO: ${error}`);
    });
})

//Rota de cadastro dos mlrsEpisodios
route.post("/mlrsEpisodios/cadastrar", function(req,res){
    const episodio = req.body.episodio;
    const resumo = req.body.resumo;
   
    MlrsEpisodios.create({
        episodio: episodio,
        resumo: resumo,
    }).then(()=>{
        res.redirect("/mlrsEpisodios")
    }).catch(error =>{
        console.log(`Ocorreu um erro ao cadastrar o episódio. ERRO: ${error}`)
    });
})

route.get("/mlrsEpisodios/excluir/:id", (req, res)=> {
    const id = req.params.id;
    MlrsEpisodios.destroy({
        where:{
            id: id,
        },
    }).then(()=>{
        res.redirect("/mlrsEpisodios");
    }).catch(error=>{
        console.log(`Ocorreu um erro ao excluir o episodio. ERRO: ${error}`);
    });
});

//ROTA DE EDIÇÃO DO EPISODIO
route.get("/mlrsEpisodios/editar/:id", (req, res)=>{
    const id = req.params.id;
    MlrsEpisodios.findByPk(id).then(mlrsEpisodios=>{
        res.render("mlrsEpisodiosEditar",{
            mlrsEpisodios: mlrsEpisodios,
        })
    }).catch(error=>(`Ocorreu um erro ao buscar os episodios. ERRO${error}`))
})

//ROTA QUE ALTERA OS EPISODIOS NO BANCO DE DADOS
route.post("/mlrsEpisodios/alterar", (req,res) =>{
    const id = req.body.id;
    const episodio = req.body.episodio;
    const resumo = req.body.resumo;
    //Chamando o model e pedindo para alterar no banco de dados
    MlrsEpisodios.update(
        {
            episodio: episodio,
            resumo: resumo,
        },
        {
            where: {id: id}

        }).then(()=>{
        res.redirect("/mlrsEpisodios");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar o episodio. ERRO: ${error}`);
    });    
});


export default route;