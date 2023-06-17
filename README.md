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
