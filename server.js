const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./conexao');
app.use(cors());
app.use(express.json());

//Criar uma endpoint pra listar 
app.get('/funcionarios', (req, res) => {
    db.query('SELECT * FROM vw_func_setor_assoc', (erro, resultados) => {
        if(erro){
            res.json({mensagem: 'Erro ao consultar os colaboradores'});
            return;
        }
        res.json(resultados);
    })
}); //fim de rota

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});