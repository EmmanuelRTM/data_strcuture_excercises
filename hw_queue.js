class Queue {

    constructor(){
        this.collection = [] // esto es la fila
    }

    enqueue(item){ //Agrega un nuevo elemento a la
        this.collection.push(item);
    }

    dequeue(){
        return this.collection.shift() //siempre va a sacar el primero
    }

    length(){ //el numero de elementos en mi fila
        return this.collection.length
    }

    isEmpty(){
        return this.collection.length === 0
    }

    front(){
        return this.collection[0] //el primer elemento en la fila
    }
    getCollection(){
        return this.collection;
    }
}
/*
const filaDeTortillas = new Queue()
filaDeTortillas.enqueue("Edwin")
filaDeTortillas.enqueue("Raúl")
filaDeTortillas.enqueue("Mali")
filaDeTortillas.enqueue("Maui")
console.log("El primero en la fila", filaDeTortillas.front())
console.log("Atendiendo al cliente")
console.log(filaDeTortillas.dequeue())
console.log("El primero en la fila", filaDeTortillas.front())
console.log("Que dan por atender", filaDeTortillas.length())
console.log(filaDeTortillas.isEmpty())
console.log("Atendiendo al cliente")
filaDeTortillas.dequeue()
console.log("El primero en la fila", filaDeTortillas.front())

class Song{
    constructor(title, duration){
        this.title = title
        this.duration = duration
    }

    play(){
        return `reproducioendo ${this.title}`
    }

}*/
/*
const myPlayList = new Queue() //Esto es la playlist
const song1 = new Song("El triste", "2:30")
const song2 = new Song("La chona", "3:30")
const song3 = new Song("Cumbion chido", "2:30")

myPlayList.enqueue(song1)
myPlayList.enqueue(song2)
myPlayList.enqueue(song3)

setInterval(function(){ //va a ejecutar esto cada tres segundos
    if(!myPlayList.isEmpty()){
        console.log(myPlayList.dequeue().play())
    }else{
        console.log('se acabo la fiesta')
    }
}, 3000) //3000 milisegundos
*/
/*
5.- Se tiene una cola de colores y se tiene que dividir en dos colas, 
respetando el orden y alternando a partir de su índice. 
los pares en una y los nones en otra

Cola 1: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 2: [ amarillo, rojo, azul, morado]
Cola 3: [rosa, verde, negro, blanco]*/
console.log("\n")
console.log("Ejercicio 5 ---------------------------------------------------------------------")
console.log("\n")

var queueColors = new Queue()
queueColors.enqueue("amarillo")
queueColors.enqueue("rosa")
queueColors.enqueue("rojo")
queueColors.enqueue("verde")
queueColors.enqueue("azul")
queueColors.enqueue("negro")
queueColors.enqueue("morado")
queueColors.enqueue("blanco")
console.log("Cola 1: ", queueColors.getCollection())
var  cola2 = new Queue();
var  cola3 = new Queue();
const longitude= queueColors.length();
var aux =0;
for(var i =0 ; i<longitude ;i++){
   // console.log(i)
    if(aux===0){
        var insert= queueColors.dequeue();
       // console.log(insert)
        cola2.enqueue(insert)
        aux++;
    }else{
        var insert= queueColors.dequeue();
        //console.log(insert)
        cola3.enqueue(insert)
        //cola3.enqueue(22)
        aux--;
    }
}

console.log("Cola 2: ", cola2.getCollection())
console.log("Cola 3: ", cola3.getCollection())


/*
6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. 
Sin embargo,

llegada la hora de inicio hay muchos "colados", es por esto que 

se le ordena al vigilante que 

retire a todos aquellos que no tienen ticket. 
Muestre la cola inicial, 
qué  elementos fueron retirados de la cola 
y la cola final. 

Sugerencia: desencole cada elemento, si tiene ticket se vuelve a encolar, sino se retira. 

Cola: [{user:'User1',ticket:true},{user:'User2',ticket:true},{user:'User3',ticket:false},{user:'User4',ticket:true},{user:'User5',ticket:false},{user:'User6',ticket:false},{user:'User7',ticket:true},{user:'User8',ticket:true},{user:'User9',ticket:true},{user:'User10',ticket:false},{user:'User11',ticket:true}] 
*/

console.log("\n")
console.log("Ejercicio 6 ---------------------------------------------------------------------")
console.log("\n")

class User{
    constructor(user, ticket){
        this.user = user
        this.ticket = ticket
    }
    hasTicket(){
        return this.ticket;
    }
}
var user1= new User("User1",true)
var user2= new User("User2",true)
var user3= new User("User3",false)
var user4= new User("User4",true)
var user5= new User("User5",false)
var user6= new User("User6",false)
var user7= new User("User7",true)
var user8= new User("User8",true)
var user9= new User("User9",true)
var user10= new User("User10",false)
var user11= new User("User11",true)

var alborotados = new Queue();
alborotados.enqueue(user1)
alborotados.enqueue(user2)
alborotados.enqueue(user3)
alborotados.enqueue(user4)
alborotados.enqueue(user5)
alborotados.enqueue(user6)
alborotados.enqueue(user7)
alborotados.enqueue(user8)
alborotados.enqueue(user9)
alborotados.enqueue(user10)
alborotados.enqueue(user11)
console.log("Cola: ",alborotados.getCollection());

var colados = new Queue();
const longitud2= alborotados.length();
for(var i =0 ; i< longitud2 ; i++ ){
    if(alborotados.front().hasTicket()){
        alborotados.enqueue(alborotados.dequeue());
    }else{
        colados.enqueue(alborotados.dequeue());
    }
}
console.log("Ordenados: ",alborotados.getCollection());
console.log("Desordenados: ", colados.getCollection());
