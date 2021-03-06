    // Clase cola
class Cola
{
    // el arreglo se usa para implementar la cola
    constructor()
    {
        this.items = [];
    }

// Funcion añadir
añadir(element)
{    
    // Añadir elemento a la cola
    this.items.push(element);
}
//funcion eliminar
eliminar()
{
    // remueve elemnto de la cola
    // si la cola esta vacia retorna sobreflujo

    if(this.estavacio())
        return "Sobreflujo";
    return this.items.shift();
}
// funcion frente
frente()
{
    //muestra el elemento que se encuentra al inicio sin removerlo

    if(this.estavacio())
        return "Sin elementos en la cola";
        //el indice 0 que es el inicial
    return this.items[0];
}
// funcion comprobar si esta vacio
estavacio()
{
    //regresa verdadero si la cola esta vacia
    return this.items.length == 0;
}
// ImprimirCola funcion
recorrerCola()
{
    var str = "";
    //recorremos la lista y mostramos los valores
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
}
// creamos un objeto de la clase Cola
var cola = new Cola();


//Si no hay nada en la cola muestra sobreflujo
console.log(cola.eliminar());

//comprobamos que la cola este vacia
console.log(cola.estavacio());

//Añadimos elementos a la Cola
//
cola.añadir(10);
cola.añadir(20);
cola.añadir(30);
cola.añadir(40);
cola.añadir(50);


// muestra 10
console.log(cola.frente());

// elimina el diez
// la cola ahora contiene [20, 30, 40, 50]
console.log(cola.eliminar());

// muestra 20
console.log(cola.frente());

// elimina 20
// la cola ahora contiene [30, 40, 50]
console.log(cola.eliminar());

// imprime los elementos de la cola
//  [30, 40, 50]
console.log(cola.recorrerCola());