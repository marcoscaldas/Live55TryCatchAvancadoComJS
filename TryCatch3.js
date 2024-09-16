const pessoa = {
    nome: "Marcos",
    detalhes: {
        idade:44
    }
};

try {
    //  ACESSAR A PROPRIEDADE IDADE
    console.log('idade: ', pessoa.detalhes.idade);

    if(pessoa.detalhes.profissao === undefined ){
        throw new Error('Propriedade "profissão" não encontrada')
    }

} catch (error) {
    console.error('Erro ao acessar a propriedade: ',
         error.message);

}finally{
    console.log('Acesso ao objeto concluído!');

}