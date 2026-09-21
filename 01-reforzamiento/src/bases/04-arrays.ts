
// si acepta arreglos revuletos
const myArray:number[] = [1,2,3,4,5,6];

myArray.push(10);
myArray.push('11');

for (const myNumber of myArray){
    console.log(myNumber + 10); // esto genera erores
}

//esto es lo mejor definir desde cero, para evitar errores
const myArray2:number[] = [];   