# Typescript_public -> https://www.typescriptlang.org/
Learning typescript...

Typescript es como Javascript pero sin sorpresas (lanzado en 2012 por microsoft)
Añade tipado estatico y objetos basados en clases. (Subconjunto de javascript)
Estaremos mucho mas seguro de la data que podemos recibir y enviar.
Lo podemos usar desde el clientside o serverside.
Un transpilador traduce nuestro codigo .ts y lo convierte a .js p/q el navegador lo pueda entender.

tsc --help (listado de comandos)

tsc --init (nos ayuda a montar y configurar nuestro proyecto).
tsc + enter (compila ts a js sin ejecutar nada)
tsc -v  (Consultamos en terminal la version de Typescript).
tsc index.ts -> (compila nuestro archivo .js p/ el navegador)
tsc index.ts && node index.js

Las conversiones de Typescript a Javascript siempre las hacemos en otro directorio.
tsc --outDir dist index.ts && node dist/index.js

Debemos configurar un watcher que va compilando nuestros cambios en los ficheros typescript y generando los archivos en javascript
# tsc --outDir dist index.ts --watch

******************************************

# Interfaces vs Clases
*La mayor diferencia es que la INTERFACE solo existe en tiempo de compilacion cuando nuestro codigo es compilado a javascript, las interface no existen, es decir qe no agregan ningun peso al bundle final. Solamente las usamos para verificacion de tipos*

*Las clases existen en el tiempo de compilacion y de ejecucion. Podemos inicializar prop e implementar metodos y crear instancias de esa clase con la palabra reservada NEW*

Lo mas normal es comenzar a trabajar con una interfaz y luego si necesitamos inicializar algunas propiedades podemos pasar a trabajar con una clase.
