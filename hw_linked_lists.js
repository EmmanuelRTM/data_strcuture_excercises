class Node { // este es mi nodo
    constructor(dato){
        this.dato = dato
        this.next = null
    }

}

class LinkedList{ // Esta es mi lista en lazada
    
    constructor(){
        this.head = null; //Esto significa que no hay nada en la lista
        this.length = 0 // numero de elementos dentro de la lista
    }

    //Como agregamos algo a i lista
    add(dato){
        const node = new Node(dato) //creando nodo con su dato
        if(this.head === null){ //si mi lista esta vacia
            this.head = node //asigno el primer nodo como la cabeza de la lista
        }else{ //ejecuta esto cuando hay mas elemento en la lista
            //Tengo que buscar el ultimo elemento en mi lista 
            //y asociarlo con el penultimo
            var currentNode = this.head; //Siempre empiezo a buscar desde el head

            while(currentNode.next){ //Va ejecutar mientras esto sea verdadero
                //Si el nodo actual tiene un sigiente nodo 
                //esto se va a estar ejecutando
    
                //mientras haya un node  sigue buscando
                currentNode = currentNode.next
            }

            currentNode.next = node; 
            //aqui asocio el ultimo nodo con el nuevo nodo que cree
        }

        this.length++; 
        //es para saber cuantos elementos tengo en mi lista
        //aumento en uno el numero de elementos dentro de mi lista

    }

    remove(datoBorrar){ 
        //tengo que especificar que dato va a ser borrado
        var currentNode = this.head;
        var previousNode = null; //aqui voy a almacenar el nodo con el que tengo que reconectar
        if(currentNode.dato === datoBorrar){ //esto va a borrar el head
            this.head = currentNode.next //reasigno la cabeza de mi
        }else{
            while(currentNode.dato !== datoBorrar){
                previousNode = currentNode; //el current se convierte en el privousnode
                currentNode = currentNode.next //Pasa al siguiente nodo
            }
            previousNode.next = currentNode.next
        }
        this.length--;
    }
/*
    
    isElementHere(datoBorrar){
        //se esepcifica que dato va a ser buscado
        var currentNode = this.head;
        var previousNode = null; //aqui voy a almacenar el nodo con el que tengo que reconectar

        if(currentNode.dato=== datoBorrar){ 
            return true; //regresa true
        }else{
            //console.log(currentNode.dato)
            while((currentNode.dato) !== datoBorrar){
                previousNode = currentNode; //el current se convierte en el privousnode
                currentNode = currentNode.next //Pasa al siguiente nodo
            }
            if(currentNode.dato=== datoBorrar){ 
                return true; //regresa true
            }
        }
        return false;
    }
    addOnlyUniqueElement(element){
        
        if(this.isElementHere(element)){
            
            console.log(`The element ${element} was found in this list, the list will not add this element`)
        }else{
            
            this.add(element);//agrega el elemento si no fue encontrado en la lista, es decir si es unico
        }
    }*/

    printNodeByNode(){ 
        //tengo que especificar que dato va a ser borrado
        var currentNode = this.head;
        var previousNode = null; //aqui voy a almacenar el nodo con el que tengo que reconectar
            while(currentNode.dato !== null){
                console.log("Current element is: ",currentNode.dato);
                previousNode = currentNode; //el current se convierte en el privousnode
                currentNode = currentNode.next //Pasa al siguiente nodo
                if(previousNode.next === null){
                    return;
                }
            }
    }

    printIfMoreThan(greatValue){ 
        //tengo que especificar que dato va a ser borrado
        var currentNode = this.head;
        var previousNode = null; //aqui voy a almacenar el nodo con el que tengo que reconectar
            while(currentNode.dato !== null){
                if(greatValue<currentNode.dato){
                    console.log("\nNode: ",currentNode);
                }
                previousNode = currentNode; //el current se convierte en el privousnode
                currentNode = currentNode.next //Pasa al siguiente nodo
                if(previousNode.next === null){
                    return;
                }
            }
    }
}

const myList = new LinkedList();

myList.add(22);


console.log(myList)

myList.add(33);

console.log(myList)

myList.add(44);

console.log(myList)

myList.add(55);

console.log(JSON.stringify(myList)) //json.stringify convierte objeto a string

myList.remove(44)


/*
7.- Listas Enlazadas
1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista.
Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.
*/

console.log("\n")
console.log("Ejercicio 7 ---------------------------------------------------------------------")
console.log("\n")

//myList.addOnlyUniqueElement(99);
console.log(JSON.stringify(myList))

/*
8.- Escribir un programa para formar una lista que realicen las siguientes tareas:
a) Crear una Lista Enlazadas de Números Enteros Positivos al azar, 
la inserción se realiza por el último nodo.
b) Recorrer la Lista para mostrar los Elementos por pantalla.
c) Mostrar todos los Nodos que superen un valor determinado.*/
console.log("\n")
console.log("Ejercicio 8 ---------------------------------------------------------------------")
console.log("\n")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Create random list
const randomList = new LinkedList();
for(var i = 0;i<10;i++){
    randomList.add(getRandomInt(0, 1000));
}
console.log(JSON.stringify(randomList))

//print data by data
randomList.printNodeByNode();

//print Node if it's only more than a value
randomList.printIfMoreThan(500);