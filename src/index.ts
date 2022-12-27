let mensaje: string = "Hola mundo"

mensaje="No"

console.log(mensaje)

console.log(typeof [])

let extincionDino: number = 70_000_000
let dinoFav: string = "T-Rex"
let extintos: boolean = true

function porque(config: any){
    return config
}

let animales: string[] = ["perro","gato","pato"]
let num: number[] = [1,2,3]
let checks: boolean[] = []
let num2: Array<number> = []

let tupla:[number,string[]] = [1,['lol','pepe']]

const chica = "s"
const mediana = "m"
const grande = "l"

enum Talle {chica,mediana,grande}
const variable = Talle.chica
console.log(variable)

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success

type Direccion = {
    numero: number,
    calle: string,
    pais: string,
}

type Persona = {
    readonly id:number,
    nombre:string,
    talla: Talle,
    direccion: Direccion,
} 

const objeto:Persona = {
    id:1, 
    nombre: 'Hola mundo', 
    talla: Talle.grande,
    direccion: {
        numero: 2,
        calle: "una",
        pais: "Paraguay"
    }
}

const arr: Persona[] = []

