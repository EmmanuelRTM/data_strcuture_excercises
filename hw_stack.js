/*1,
Hacer una función que reciba una pila como parámetro, y un número, 
la función debe de sacar el número de elementos que diga el número (segundo parámetro)
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)
Salida: ['Manzana','Cebolla','Apio','Naranja']
*/

class Stack{
    //va a tener dos metodos push y pop
    //peek ---> me dice el ultimo elemento en la pila
    //length ----> me dice el tamaño de la pila
    constructor(){
        this.count = 0 // aqui voy a guardar cuantos elementos tengo en la pilla
        this.storage = {} // aqui voy a guardar los elementos de mi pila
    }
    push(nuevoElemento){ //Mete cosas nuevas a  mi pila
        //{'0':2,'1':3,'2':7}
        //deja la pila
        //this.storage = {}
        this.storage[this.count] = nuevoElemento; //agrega un elemento a una pocision
        console.log("Stack -> push -> storage", this.storage)
        
        this.count++;
        console.log("Stack -> push -> count", this.count)
        console.log("Haciendo push")
    }

    pop(){
        if(this.count == 0){
            return null;
        }// checa si la pila esta vacia

        //this.count ----- >  3
        console.log("Antes de haccer el pop")
        console.log("Stack -> pop -> storage", this.storage)
        console.log("Stack -> pop -> count", this.count)

        this.count--; //quito uno a count
        var result = this.storage[this.count] //va aguardar el ultimo elemento en mi pila
        delete this.storage[this.count] //se borra el ultimo elemento
        console.log("Despues de haccer el pop")
        console.log("Stack -> pop -> storage", this.storage)
        console.log("Stack -> pop -> count", this.count)
        return result //regreso el ultmo elemento
    }

    length(){
        return this.count;
    }
    //Regresa el ultimo valor en  la pila, mas no lo elimina
    peek(){
        console.log("Estoy en peek")
        return this.storage[this.count - 1]
    }
    getElement(index){
        var result = this.storage[index];
        return result;
    }
    getStorage(){
        return this.storage;
    }
    isElementDetected(element){
        for (var i = 1 ;i < (this.count +1);i++){
            if(element === this.storage[this.count - i]){
                return true;
            }
        }
            return false;
    }
    firstElementDetected(element){
        for (var i = 1 ;i < (this.count +1);i++){
            if(element === this.storage[this.count - i]){
                return (this.count - i);
            }
        }
        return false;
    }
    setInternalElement(newValue, index){
        //delete this.storage[index]
        this.storage[index] = newValue;
    }
}

function getOutNumberElements(pila,number){
    if (number > pila.length()){
        return;
    } else{
        var pilaExtra= new Stack();
        for(var i = 0; i < number; i++){
            pilaExtra.push(pila.getElement(i));
        }
        return  pilaExtra;
    }
    
}


console.log("\n")
console.log("Ejercicio 1 ---------------------------------------------------------------------")
console.log("\n")
var pila1= new Stack();
var numberX= 3
pila1.push("jamon");
pila1.push("pavo");
pila1.push("salmon");
pila1.push("pollo");
pila1.push("chilaquil");
var pila2 = getOutNumberElements(pila1,numberX);
console.log("Entrada: ",pila1.getStorage(),", number: ", numberX );
console.log("Salida:", pila2.getStorage());

/*
2.- 2.- Escribir una función reemplazar que tenga como parámetro una pila de elementos de tipo Number 
y dos valores también de tipo Number nuevo y viejo 
de forma que si el segundo valor aparece en algún lugar de la pila,
sea 
reemplazado por el primero (Solo la primera vez), y hará 
pop de los elementos más nuevos.

Entrada: reemplazar([3,2,3,4,5,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,5,8,1,7]
*/

function reemplazar(pilaNumber, newNumber, oldNumber){
    console.log(pilaNumber.isElementDetected(oldNumber));
    if(pilaNumber.isElementDetected(oldNumber)){
        var position = pilaNumber.firstElementDetected(oldNumber);
        var longitude = pilaNumber.length();
        pilaNumber.pop();
        pilaNumber.pop();
        if(longitude=== position || longitude == (position-1)){
            pilaNumber.push(newNumber);
        }else{
            pilaNumber.setInternalElement(newNumber,position);
        }
    }else{
        console.log("The element wasn't found in the stack");
    }
}

console.log("\n")
console.log("Ejercicio 2 ---------------------------------------------------------------------")
console.log("\n")

var pila3= new Stack();
var numberY= 11 //NEW NUMBER
var numberZ= 8 //OLD NUMBER
pila3.push(8);
pila3.push(5);
pila3.push(8);
pila3.push(3);
pila3.push(4);
pila3.push(10);
console.log("\n")
console.log("Entrada: ",pila3.getStorage(),", New number: ", numberY ,", Old number: ", numberZ);
reemplazar(pila3, numberY, numberZ);
console.log("\n")
console.log("Salida:", pila3.getStorage());


/**
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 

Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
 */

console.log("\n")
console.log("Ejercicio 3 ---------------------------------------------------------------------")
console.log("\n")

var pila4= new Stack()
pila4.push("Origen");
pila4.push("pueblo magico 1");
pila4.push("pueblo magico 2");
pila4.push("chichen-itza");
pila4.push("Destino Final");

var pilaSuplente = pila4;

var pila5= new Stack()
const lontiude_de_pila = pila4.length()
console.log("\n")
console.log("\n")
console.log("Recorrido: ", pila4.getStorage());
console.log("\n")
console.log("\n")
for(var i = 0 ; (i <lontiude_de_pila ) ; i++){

    pila5.push(pilaSuplente.pop());

}
console.log("\n")
console.log("Regreso: ", pila5.getStorage());
console.log("\n")





/**4.-  Un almacén tiene capacidad para apilar n contenedores. Cada contenedor tiene un número
de identificación. Cuando se desea retirar un contenedor específico, deben retirarse
primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro
y regresarlos. */
console.log("\n")
console.log("Ejercicio 4 ---------------------------------------------------------------------")
console.log("\n")

function sacarDelContenedor(pila, contenedorID){
    //console.log(pilaNumber.isElementDetected(oldNumber));
    if(pila.isElementDetected(contenedorID)){
       // var position = pila.firstElementDetected(oldNumber);
        var pilaAuxiliar = new Stack();
        while(pila.isElementDetected(contenedorID)){
            if(contenedorID===pila.peek()){
                pila.pop();
            }else{
                pilaAuxiliar.push(pila.pop());
            }
        }
        while(pilaAuxiliar.length()>0){
            pila.push(pilaAuxiliar.pop());
        }
    }else{
        console.log("The element wasn't found in the stack");
    }
}

var pila6= new Stack();
pila6.push(3543);
pila6.push(4820);
pila6.push(7540);
pila6.push(9572);
pila6.push(8420);
pila6.push(1904);
pila6.push(9382);
pila6.push(1083);
console.log("\n")
console.log("Antes: ", pila6.getStorage(), ", ID to obtain: ", 7540);
console.log("\n")

sacarDelContenedor(pila6, 7540);

console.log("\n")
console.log("Despues: ", pila6.getStorage());
console.log("\n")