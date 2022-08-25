import { countries } from './countries.js'

const value = process.argv[2]

const result = countries.filter(pais => {
  return pais.continent.toLowerCase().includes(value)
})
console.table(result)


type Person = {
  ide: string | Number,
  name: String,
  email: String, 
  password: string| Number
  role: "admin"| "normal"
}


const newPerson = {
  ide: "br999",
  name: "br",
  email: "oi@gmail", 
  password: 13456,
  role: "admin"
}
console.table(newPerson)


//AdminAccount

type AdminAccount ={
  AdminAccount: Boolean,
  AdminPerson: boolean
}

type NormalAccount ={
  userAccount: Boolean,
  userPermission: Boolean
}