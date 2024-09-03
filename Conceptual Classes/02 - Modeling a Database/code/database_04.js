class Database {
    constructor() {
        this.collections = {};
    }

    createCollection(name) {
        if (name in this.collections) {
            throw new Error(`Collection: ${name} already exists.`);
        }

        const collection = new DatabaseCollection();

        this.collections[name] = collection;

        return collection;
    }

    deleteCollection(name) {
        delete this.collections[name];
    }

    getCollection(name) {
        if (!(name in this.collections)) {
            throw new Error(`Collection: ${name} not found.`);
        }

        return this.collections[name];
    }
}

class DatabaseCollection {
    constructor() {
        this.collection = [];
    }

    create(record) {
        this.collection.push(record);

        return { uid: this.collection.length - 1, ...record };
    }

    find(uid) {
        return this.#getRecord(uid);
    }

    update(uid, record) {
        const entry = this.#getRecord(uid);

        const updatedEntry = {
            ...entry,
            ...record,
        };

        this.collection[uid] = updatedEntry;

        return { uid, ...updatedEntry };
    }

    delete(uid) {
        this.#getRecord(uid);

        this.collection[uid] = null;
    }

    findMany(partial) {
        return this.collection.filter((entry) =>
            Object.keys(partial).every((key) => partial[key] === entry[key])
        );
    }

    #getRecord(uid) {
        const entry = this.collection[uid];

        if (!entry) {
            throw new Error(`Record: ${uid} not found.`);
        }

        return entry;
    }
}

// =============================================================================

const db = new Database();

db.createCollection("users");
const userCollection = db.getCollection("users");

const userA = userCollection.create({
    name: "Jannatin Naim",
    age: 20,
});

console.log(db);

console.log(userCollection.find(userA.uid));

userCollection.delete(userA.uid);

console.log(userCollection);

const userB = userCollection.create({
    name: "Saidur Rahman Setu",
    age: 99,
});

console.log(db);

userCollection.create({ name: "User A", age: 20 });
userCollection.create({ name: "User B", age: 30 });
userCollection.create({ name: "User C", age: 20 });
userCollection.create({ name: "User D", age: 40 });

console.log(userCollection.findMany({ age: 20 }));

const booksCollection = db.createCollection("books");

const book = booksCollection.create({ name: "Eloquent JavaScript " });

console.log(booksCollection);
console.log(book);