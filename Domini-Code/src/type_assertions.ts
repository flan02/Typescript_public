//TODO Type assertion: Sino sabemos el tipo de un valor podemos hacer un CAST
//TODO para convertir al valor que nosotros queramos.

let channel: any = 'Dominicode'
// dos formas de hacer el CAST
let channelStr = <string>channel
let channelStr2 = channel as string

// dos formas 
const myCanvas = document.getElementById('main') as HTMLCanvasElement
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main')
