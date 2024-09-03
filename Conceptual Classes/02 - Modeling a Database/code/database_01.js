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
}
