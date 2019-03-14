type Greeting = {
  greeting: string
  name: string
}

function greet({ greeting, name }: Greeting) {
  return `${greeting}, ${name}`
}

const message: string = greet({ greeting: 'Heyyy', name: 'Dan' })

console.log({ message })

// Working with DOM

// Use the `as` to set the type for something
const input = document.getElementById('input') as HTMLInputElement

// now we can set autofocus true b/c this is an HTML input element
input.autofocus = true

input.addEventListener('change', evt => {
  const i = evt.target as HTMLInputElement
  // With this evt target typed as an input element we can access the value ok
  console.log(i.value)
})

// --- Generics

// This fn takes an array of fills it with the passed value ->
// Declare a generic type `T` which is the type of the passed value and is used
// as to type the return array
function fill<T>(arr: any[], value: T): T[] {
  return arr.map(() => value)
}

// TS now knows the types of these fn calls
const numbers = fill(['a', 'b', 'c'], 4)
// Instead of inferring the generic we can assert its type with angle brackets:
const letters = fill<string>([1, 2, 3], 'a')

// The uppercase T is a convention for generic types, like 'foo'
// The declared generic can be used anywhere in the fn, in the parameters, the
// return or the body
