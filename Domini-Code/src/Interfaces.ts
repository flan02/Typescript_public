/*
? INTERFACES
? Es una definicion de contrato de codigo, define la forma de la data con la que vamos a trabajar (Es una especie de molde).  
*/
//TODO Example
interface Book {
    id: number
    title: string
    author: string
    coAuthor?: string // opcional
    isLoan?: (id: number) => void // metodo
}

const book: Book = {
    id: 1,
    title: 'My title',
    author: 'Dominicode'
}

const books: Book[] = []

function getBook(): Book {
    return { id: 1, title: 'My title fc', author: 'Bezael' }
}

const myBook = getBook()
//myBook.id

//* Devolvemos lo mismo que recibimos
function createBook(book: Book): Book {
    return book
}

const newBook: Book = {
    id: 2,
    title: "My title 2",
    author: "Author 2"
}

createBook(newBook) //* Debe ser de tipo book