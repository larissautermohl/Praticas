const username = "astrodev"
const users = [
    {
        name: "Fulano"
    },
    {
        name: "Ciclana"
    }
]

const f1 = () => {
    const f2 = () => {
        const f3 = () => {
            const f4 = () => {
                console.log(username)
                users.push({ name: username })
            }
            f4()
        }
        f3()
    }
    f2()
}

f1()

console.log(users)