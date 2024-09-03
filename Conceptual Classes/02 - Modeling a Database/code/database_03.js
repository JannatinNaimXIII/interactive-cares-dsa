class Database {
    constructor() {
        this.collections = {};
    }

    createCollection(name) {
        if (name in this.collections) {
            throw new Error(`Collection: ${name} already exists.`);
        }

        this.collections[name] = [];
    }

    deleteCollection(name) {
        delete this.collections[name];
    }

    create(collectionName, record) {
        const collection = this.#getCollection(collectionName);

        collection.push(record);

        return { uid: collection.length - 1, ...record };
    }

    find(collectionName, uid) {
        return this.#getRecord(collectionName, uid);
    }

    update(collectionName, uid, record) {
        const collection = this.#getCollection(collectionName);
        const entry = this.#getRecord(collectionName, uid);

        const updatedEntry = {
            ...entry,
            ...record,
        };

        collection[uid] = updatedEntry;

        return { uid, ...updatedEntry };
    }

    delete(collectionName, uid) {
        const collection = this.#getCollection(collectionName);
        this.#getRecord(collectionName, uid);

        collection[uid] = null;
    }

    findMany(collectionName, partial) {
        const collection = this.#getCollection(collectionName);

        return collection.filter((entry) =>
            Object.keys(partial).every((key) => partial[key] === entry[key])
        );
    }

    #getCollection(name) {
        if (!(name in this.collections)) {
            throw new Error(`Collection: ${name} not found.`);
        }

        return this.collections[name];
    }

    #getRecord(collectionName, uid) {
        const collection = this.#getCollection(collectionName);

        const entry = collection[uid];

        if (!entry) {
            throw new Error(`Record: ${uid} not found in ${collection}.`);
        }

        return entry;
    }
}

// =============================================================================

const db = new Database();

db.createCollection("users");

const userA = db.create("users", { name: "Jannatin Naim", age: 20 });

console.log(db);

console.log(db.find("users", userA.uid));

db.delete("users", userA.uid);

console.log(db);

const userB = db.create("users", { name: "Saidur Rahman Setu", age: 99 });

console.log(db);

db.create("users", { name: "User A", age: 20 });
db.create("users", { name: "User B", age: 30 });
db.create("users", { name: "User C", age: 20 });
db.create("users", { name: "User D", age: 40 });

console.log(
    db.findMany("users", {
        age: 20,
    })
);
