// ? Las clases sirven para organizar nuestro codigo, es una unidad de encapsulamiento.

export class Person { //* EXPORT avisamos que esta clase sera heredada por otra.
    
    public zone= 'Caribean' // accesible por todos los qe hereden esta clase
    private country= 'R.D' // no esta expuesto a otras clases
    protected city= 'Santo Domingo' // solo accesible por la clase hijo, ningun nieto accedera

    constructor(){}
        greet(): void{
            //? Puedo acceder a las tres propiedades (public, protected, private).
            console.log('hello')
    }
}

/* ************************************************************************************** */

class Employees2 extends Person {
    //*Propiedades (atributos|estado de la clase)
    /*
    id: number
    private name: string // no sera accesible
    dept: string
    * Con la asig. auto. definifimos las propiedades y su tipo en el metodo donde las utilizaremos.
    */
   
    //? readonly : indica qe la variable es solo de lectura.
    constructor(private readonly id: number, private name: string, private dept: string){ // 1er metodo qe se ejecuta cuando se instancia la clase
        super()  //! Debe estar en el constr. antes de utilizar cualquier THIS
    /*
    *No es necesario gracias a la asignacion automatica asignada en los param.
        this.id = id
        this.name = name
        this.dept = dept
    */
        this.showInfo()    
    } 
    
    //*Metodos (acciones qe podemos llevar a cabo dentro de nuestra clase pero tambien fuera dependiendo de qe visibilidad le demos)
    private showInfo():void {
        console.log(`${this.name}`)
        console.log(`${this.zone}`); // public en clase padre podemos heredarla.
        // private solo tengo acceso en la clase padre.
        // console.log(`${this.country}`); 
        console.log(`${this.city}`); // protected accesible pero no podra ser usada en otra clase nieto qe herede de esta clase hijo
    }
}

//! No tendremos acceso desde fuera del ambito de la clase si los metodos y propiedes son PRIVATE.

const employee = new Employees2(1, 'Dominicode', 'Sales')
employee.greet() // el metodo heredado el publico entonces tengo acceso
const employee2 = new Employees2(2, "Hola mundo", "Education")

//TODO Typescript nos proporciona KEYWORDS p/ controlar la accesibilidad de nuestras propiedades y metodos
//? public (default), private, protected
//employee.id // acceso publico




