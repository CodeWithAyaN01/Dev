type UserID = string
// User is a user defined data type

interface User {
    id: UserID,
    fname: string,
    lname?: string, // ? means that this is optional
    email: string,
    contact: {
        mobile: string
    },
    address: {
        street: number,
        pin: number,
        country: number
    }
}
class InMemoryDB {
    private _db: Map<UserID, User> // key value pair <type, type>
    constructor() {
        this._db = new Map< User['id'], User>();
    }
    //insertFunction

    public insertUser(data: User): UserID {
        if(this._db.has(data.id)) {
            throw new Error(`User With ID ${data.id} already exists`)
        }
        this._db.set(data.id, data) // <key, value> key = data.id that means number or a stering as per userID and the value = Data 
        return data.id;
    }

    // public updateUser(id: UserID, updateData: Omit<User, 'id'>): boolean {
    //     if(!this._db.has(id)) {
    //         throw new Error(`User doesnot Exists`)
    //     }
    //     this._db.set(id, {...updateData, id}) //add ing id into update data
    //     return true
    // }
}

const myDb = new InMemoryDB()
myDb.insertUser({
    id: "user_101",
    fname: "Ayan",
    lname: "Gupta",
    email: "ayan.gupta@example.com",
    contact: {
        mobile: "9876543210"
    },
    address: {
        street: 221,
        pin: 560037,
        country: 1 // better as string
    }
});

console.log(myDb);