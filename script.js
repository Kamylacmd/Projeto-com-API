$(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/funcionarios",
        type: "GET",
        dataType: "json",
        success: function(dados){
            dados.forEach(item =>{
                $("#caixa_conteudo").append(`
                    <div class='cartoes'>
                        <h4>Nome: ${item.nome_func}</h4>
                        <span> ${item.cpf_do_funcionario} </span> <br>
                        <span> ${item.data_nasc} </span> <br> <br>
                        Setor: ${item.nome_setor} <br>
                        Situação: ${item.situacao}

                `);
            });
        },
        error: function(error){}
    });
});