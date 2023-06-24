function greet () {}  //? Cuerpo de la funcion

function greet2 (name: string) { //! (name: string):void   
    console.log(`Hello my name is ${name.toUpperCase()} !!`);
}

function greet3 (name: string = 'User') { //? Parametro x defecto.   
    console.log(`Hello my name is ${name.toUpperCase()} !!`);
}

greet2('Dominicode') //espera un String
greet3()
greet3('@flan02')


// *********************************************************** /

function getNumber() { //Por el return infiere qe el retorno de la fc es Number
    return Math.floor(Math.random() * 100)
}
console.log(getNumber())

//Especificamos explicitamente el tipo de valor que retorna la fc
function getNumber2():number { return 4} 

// *********************************************************** /

function printPosition(position: {lat: number, long: number}):void {
    console.log(
        `Latitude & Longitude are: LAT ${position.lat} LONG: ${position.long}`
    );
}

printPosition({lat: 3, long: 55})


function printPositionOptional(position: {lat: number, long?: number | string }):void {
    console.log(
        `Latitude & Longitude are: LAT ${position.lat} LONG: ${position.long}`
    );
}

printPositionOptional({lat: 3}) // El param long es opcional pero si lo invoco y no tiene valor sera Undefined.


//tsc && node dist/functions.js