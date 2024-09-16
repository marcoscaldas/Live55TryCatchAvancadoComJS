function dividir(a, b){

    try {
        if( b === 0){
            throw new Error ('Divisão por 0' +
                ' não é permitido');
        }

        let resultado  = a / b
        console.log('Resultado: ' , resultado);

    } catch (error) {
        console.error('Error: ', error.message);

    }finally{
        console.log('Operação finalizada!')
    }
}
dividir(10 , 2);
dividir(10 , 0);