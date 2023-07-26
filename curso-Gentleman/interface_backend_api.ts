// TODO Trabajaremos en como modelar la API de Rick and Morty

// ! Pipe es una canal por el cual yo voy a ir implementando metodos, cada uno obtiene el resultado del anterior metodo, lo procesa y genera un resultado nuevo.

interface CharacterApi {
    info: CharacterApiInfo,
    results: CharacterApiResult[];
}

interface CharacterApiInfo {
    count: number;
    pages: number;
    next: string;
    prev: boolean;
}

interface CharacterApiResult {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterApiResultDescription;
    location: CharacterApiResultDescription;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

interface CharacterApiResultDescription { // sera compartido por origin y location
    name: string;
    url: string;
}

/*
* Para volcar la info de la API en un array de CharacterApiResult, podemos hacer lo siguiente:
*
* const characters: CharacterApiResult[] = [];
* const response = await fetch('https://rickandmortyapi.com/api/character');
* const data: CharacterApi = await response.json();
* characters.push(...data.results);
*/

// ! https://rxjs.dev/guide/operators                     ***REVISAR***
// ! import { map } from 'rxjs/operators';
// getRickAndMortyCharacters(): Observable<CharacterApiResult[]> {
// return this.http.get<CharacterApi>('https://rickandmortyapi.com/api/character'
// ).pipe((apiResult) => apiResult.results));
// }

