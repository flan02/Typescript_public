/*
let msg: string = 'Hello Ollie'
msg = 'happy pig'
msg = 'chao Ollie'
console.log(msg)
*/


/* 
TODO Tipos Basicos

* Tipos de datos en Javascript
? number, string, boolean, null, undefined, object, function. (Array is a object)

* Tipos de datos en Typescript
? any, unknown, never, arrays, tuplas, enums

* Tipos inferidos
? typescript es inteligente y cuando iniciamos una variable con un tipo de dato asocia esa variable al tipo dado.

* String - Number
? Tambien son considerados objetos en JS pq tiene prototipos y metodos

*/



let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = 'T-Rex'
let extintos: boolean = true

let totalDinosaurios = 150 // inferido asocia por asignacion qe la var siempre sera numerica
//* totalDinosaurios = 'veinte'   Marca error por asignacion solo acepta datos number

let myvar  //! Inicializada por defecto es de tipo ANY (prohibida)

function chanchitoFeliz(config: any){  //! PROHIBIDO (no nos sirve typescript sino)
    return config
}

let animales: string[] = ['chanchito', 'perrito', 'gatito']
let nums: number[] = [1,2,3]
let nums2 = [] //! Will be ANY
let checks: boolean[] = []

//TODO Metodo alternativo de TS p/ definir el metodo array.
let nums3: Array<number> = []

//? map: Iteramos los elem de un arreglo y les aplicamos una fc.
//me sugiere solo metodos para Strings reconoce el tipo de la var.
animales.map(x => x.charAt) 


// ************************************************************************************

//? Tupla: tipo de dato qe no existe en Javascript, pero si es implementado en TS
//? es una variable que contiene un set de datos que se encuentran ordenados.
// 1, edad, animales[]
let tupla: [number, string, string[]] = [1, 'chanchito feliz', ['hello', 'ollie']]
//? Las tuplas nos permiten almacenar datos siempre y cuando hayan sido definidos previamente
//! Para hacer uso de las tuplas hay que manejar un control de la cantidad de datos inicializados (2 o 3 max) de lo contrario deberiamos utilizar otro tipo de dato.

tupla.push(12) //! Genera un error pq VSCode no nos avisa que faltan pasar tipos de datos

// *************************************************************************************

//? Enum: tipo enumerado
// podemos representar distintos estados de carga por ejemplo en una llamada a una API.
/* 
* 1. Idle: Aun no se llama a la API
* 2. Loading: Se llama a la API
* 3. Success: Respuesta exitosa
* 4. Error: Error en la respuesta
*/

const chica = 's', mediana = 'm', grande = 'l';
// PascalCase
enum Talla { Chica, Mediana, Grande } // 0,1,2 
enum TallaB { Chica = 2, Mediana, Grande } // 3,4 
enum TallaC { Chica = 's', Mediana = 'm', Grande = 'l' } // 3,4 

const var1 = Talla.Grande
const var2 = TallaC.Grande
console.log(var1, var2)

//TODO agregar (const) delante del ENUM asi solo define las var usadas
const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success


// **************************************************************************************

