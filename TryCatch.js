function verificarIdade(idade){
    try {
        
        if(idade < 18){
            throw new Error ('idade deve '+
                 'ser 18 ou mais');
        }
        console.log('Idade permitida ', idade);

    } catch (error) {
        console.error('Erro: ', error.message);
        
    } finally{

        console.log('Verificação concluída!');
    }
}
verificarIdade(17);