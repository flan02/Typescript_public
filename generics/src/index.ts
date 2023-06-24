//? Generics se utiliza bastante con Clases

interface Person {
    id: number
    name: string
}

interface Products {
    id: number
    name: string
    price: number
}

interface Employee extends Person{
    role: string
}

//TODO Forma 1: Nos sirve esto si solo tenemos tipos limitados
/*
type dataType = Person | Products 

class DataCollection {
    
    private items: dataType[] = []

    addItem(newItem: dataType): void {
        this.items.push(newItem)
    }

    getItems(): void {
        console.log(`List of items`, JSON.stringify(this.items))
    }

    getNames(): string[] {
        return this.items.map((it) => it.name)
    }

    getItemById(id: number): dataType | undefined{
        return this.items.find((it: dataType) => it.id === id)
    }
}


const personCollection = new DataCollection()

const newData = {
    id: 1,
    name: 'DominiCode'
}

personCollection.addItem(newData)

const newData2 = {
    id: 2,
    name: 'DominiCode2'
}

personCollection.addItem(newData2)

const productCollection = new DataCollection()

const newData3 = {
    id: 1,
    name: 'Papitas Lay'
}

productCollection.addItem(newData3)
personCollection.getItems()
productCollection.getItems()
*/

//TODO Forma: 2 Genericos (class p/ cualquier tipo de datos)
//* Esta forma es mas escalable y utilizada.
//convencion qe indica T: TYPE podemos indicar mas niveles T, K, P

interface Data<T> {
    addItem(newItem: T): void
}


class DataCollection<T extends {id: number, name: string}> implements Data<T>{
    
    private items: T[] = []

    addItem(newItem: T): void {
        this.items.push(newItem)
    }

    getItems(): void {
        console.log(`List of items`, JSON.stringify(this.items))
    }

    getNames(): string[] {
        return this.items.map((it) => it.name)
    }

    getItemById(id: number): T | undefined {
        return this.items.find((it: T) => it.id === id)
    }

}

const personCollection = new DataCollection<Employee>()

const newData = {
    id: 1,
    name: 'DominiCode',
    role: "Boss"
}

personCollection.addItem(newData)

const newData2 = {
    id: 2,
    name: 'DominiCode2',
    role: "Sockssucker"
}

personCollection.addItem(newData2)

const productCollection = new DataCollection<Products>()

const newData3 = {
    id: 1,
    name: 'Papitas Lay',
    price: 333
}

productCollection.addItem(newData3)
personCollection.getItems()
productCollection.getItems()