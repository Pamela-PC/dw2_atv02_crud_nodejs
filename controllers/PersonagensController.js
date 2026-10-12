import express from 'express';
//Importando o model
import Personagens from "../models/Personagens.js"
import { where } from 'sequelize';
const route = express.Router();


// ROTA Personagens
route.get("/personagens",function(req,res){
   
    Personagens.findAll().then(personagens=>{
        res.render("personagens", {
        personagens : personagens,
        });
    }).catch(error=>{
        console.log(`Ocorreu um erro a listar os personagens. ERRO: ${error}`);
    });
})

//Rota de cadastro de personagens
route.post("/personagens/cadastrar", function(req,res){

    const nome = req.body.nome;
    const idade = req.body.idade;
    const descricao =  req.body.descricao;
   
    Personagens.create({
        nome: nome,
        idade: idade,
        descricao: descricao,
    }).then(()=>{
        res.redirect("/personagens")
    }).catch(error =>{
        console.log(`Ocorreu um erro ao cadastrar o personagem. ERRO: ${error}`)
    });
})

//ROTA EXCLUIR PERSONAGEM
route.get("/personagens/excluir/:id", (req, res)=> {
    
    const id = req.params.id;
    
    Personagens.destroy({
        where:{
            id: id,
        },
    }).then(()=>{
        res.redirect("/personagens");
    }).catch(error=>{
        console.log(`Ocorreu um erro ao excluir o personagem. ERRO: ${error}`);
    });
});

//ROTA DE EDIÇÃO DE PERSONAGEM
route.get("/personagens/editar/:id", (req, res)=>{
    const id = req.params.id;

    Personagens.findByPk(id).then(personagens=>{
        res.render("personagensEditar",{
            personagens: personagens,
        })
    }).catch(error=>(`Ocorreu um erro ao buscar o personagem. ERRO${error}`))
})

//ROTA QUE ALTERA O PERSONAGEM NO BANCO DE DADOS
route.post("/personagens/alterar", (req,res) =>{
    //coletando os dados do formulário
    const id = req.body.id;
    const nome = req.body.nome;
    const idade = req.body.idade;
    const descricao = req.body.descricao;
    //Chamando o model e pedindo para alterar no banco de dados
    Personagens.update(
        {
            nome: nome,
            idade: idade,
            descricao: descricao,
        },
        {
            where: {id: id}

        }).then(()=>{
        res.redirect("/personagens");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar o personagem. ERRO: ${error}`);
    });    
});


export default route;