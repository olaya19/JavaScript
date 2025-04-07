var x = true
var y = false

console.log( x == x )// V y V = V
console.log (x == y )// V y F = F
console.log (y == x ) // F y V = F
console.log (y == y ) // F y F = V
console.log("\n") // Para que se agrege un espacio

// Tabla de verdad del operador && (AND), utilizando la conjuncion ∧.
console.log(" Tabla de verdad del operador && (AND)")
console.log("\n|  P  |  Q  |  P ∧ Q  |")
console.log("|  T  |  T  |     T    |")
console.log("|  T  |  F  |     F    |")
console.log("|  F  |  T  |     F    |")
console.log("|  F  |  F  |     F    |")

// Tabla de verdad del operador || (OR), utilizando la disyuncion V.
console.log("\n Tabla de verdad del operador || (OR)")
console.log("\n|  P  |  Q  |  P V Q   |")
console.log("|  T  |  T  |    T     |")
console.log("|  T  |  F  |    T     |")
console.log("|  F  |  T  |    T     |")
console.log("|  F  |  F  |    F     |")

// Tabla de verdad del operador ! (NOT), utilizando la negacion.
console.log("\n Tabla de verdad del operador ! (NOT)")
console.log("\n|   P   |   ¬P   |")
console.log("|   T   |    F   |")
console.log("|   F   |    T   |")
