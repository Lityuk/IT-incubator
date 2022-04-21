function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test("reference type test", () => {

    let user: UserType = {
        name: "Vova",
        age: 35
    }

    increaseAge(user)

    expect(user.age).toBe(36)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)

})


test("array reference test", () => {

    let users = [
        {
            name: "Vova",
            age: 35
        },

        {
            name: "Lena",
            age: 40
        }
    ]

    let admins = users

    admins.push({name: "Chelik", age: 10})

    expect(users.length).toBe(3)

})
