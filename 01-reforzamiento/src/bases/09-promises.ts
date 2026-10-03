
// los argumentos aqui son posicionales
// <tipo de retorno positivo>
const myPromise = new Promise<number>( (resolve, reject) => {

    setTimeout ( ()=> {
        // aqui el resultado positivo, pago 100
        // resolve(100);
        reject('No se encontró al deudor')
    },
    2000 ); // aqui espero

}) 

myPromise.then(
    // imprime los 100 que resolvi
    myMoney => {
        console.log (`Mi dinero regreso ${myMoney}`);
    }
).catch(    //catch maneja el reject
    (reason) => {
        console.warn(`No me pudo pagar ${reason}`);
    }
).finally(  // siempre se ejecuta finaly
    () => {
        console.info('Se continua el negocio aún sin pago');
    }
)