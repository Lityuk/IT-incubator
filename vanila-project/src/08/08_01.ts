export const usersObj = {
    "1": 'Vova',
    "2": 'Lena',
    "3": 'Tanya',
    "4": 'Nadia',
}

type UsersType = {
    [key: string]: {id:number, name:string}
}

export const users: UsersType = {
    "101": {id: 101, name: 'Vova'},
    "3232312": {id: 3232312, name: 'Lena'},
    "1212": {id: 1212, name: 'Tanya'},
    "1": {id: 1, name: 'Nadia'},
}

let newUser = {id:100500, name: "Igor"}

users[newUser.id] = newUser

export const UsersArray = [
    {id: 101, name: 'Vova'},
    {id: 3232312, name: 'Lena'},
    {id: 1212, name: 'Tanya'},
    {id: 1, name: 'Nadia'},
]