// import {users} from './08_01'

export {}
type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType;

beforeEach(() => {
    users = {
        "101": {id: 101, name: 'Vova'},
        "3232312": {id: 3232312, name: 'Lena'},
        "1212": {id: 1212, name: 'Tanya'},
        "1": {id: 1, name: 'Nadia'},
    }
})


test("should update corresponding user", () => {

    users['1'].name = "Alena"

    expect(users['1'].name).toBe('Alena');


})
