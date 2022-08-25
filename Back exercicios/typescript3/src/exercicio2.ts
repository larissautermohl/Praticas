function printBirthDate(name: string, birthDate: string): string {
    const date = birthDate.split("/")
    const day = date[0]
    const month = date[1]
    const year = date[2]

    return `Olá, me chamo ${name}, nasci no dia ${day}, no mês de ${month} e ano de ${year}.`
}

console.log(printBirthDate("astrodev", "15/01/1980"))