//TODO Enums: caracteristica de Typescript qe nos permite definir un conj de constantes con nombres
//TODO Pueden ser numericos o de cadena de texto.

// como en mysql
enum Roles {
    User, //User = 1, arranca desde el 1 y va sumando +1 x c/elem.  
    Admin, //2
    SuperAdmin //3
}

/* 
* Otra forma de definirlo

enum Roles {
    User = 'USER',
    Admin = 'ADMIN',
    SuperAdmin = 'SUPERADMIN'
}

*/

console.log(Roles.Admin)


//TODO Objects:

const rolesObj = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
}

console.log(rolesObj.User);