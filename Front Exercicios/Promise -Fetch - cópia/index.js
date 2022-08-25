// const fetchPokemon = () => {
//   const url = `https://pokeapi.co/api/v2/pokemon`
//   fetch(url)
//     .then(response => response.json())
//     .then(pokemon => {
//       console.log(pokemon)

//       const nomesPokes = pokemon.results
//       console.log(nomesPokes)

//       nomesPokes.forEach(item => {
//         console.log(item.name)
//       })
//     })
// }
//fetchPokemon()

const fetchPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
  const data = await response.json()
  console.log(data.results)
}

const nomesPokes = async.results
console.log(nomesPokes)

nomesPokes.forEach(item => {
  console.log(item.name)
})

// recebe()

// async function recebe() {
//   const url = await pegaValores()

//   console.log(url)
// }

// async function pegaValores() {
//   return await fetch('https://pokeapi.co/api/v2/pokemon').then(result =>
//     result.json()
//   )
// }
