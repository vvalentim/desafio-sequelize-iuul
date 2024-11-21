export class MemoryDb {
    static #instance = null;

    #tables = {
        patients: { records: new Map(), serialId: 0 },
        appointments: { records: new Map(), serialId: 0 },
    };

    constructor() {
        if (MemoryDb.#instance === null) {
            MemoryDb.#instance = this;
        }

        return MemoryDb.#instance;
    }

    static get instance() {
        if (MemoryDb.#instance === null) {
            MemoryDb.#instance = new MemoryDb();
        }

        return MemoryDb.#instance;
    }

    currentIdFrom(tableName) {
        if (this.#tables[tableName]) {
            return this.#tables[tableName].serialId++;
        }

        return null;
    }

    save(tableName, record) {
        if (!this.#tables[tableName]) {
            return null;
        }

        const table = this.#tables[tableName];

        table.records.set(record.id, record);

        return record;
    }

    delete(tableName, id) {
        if (this.#tables[tableName]) {
            const table = this.#tables[tableName];

            table.records.delete(id);
        }
    }

    records(tableName) {
        return this.#tables[tableName] ? Array.from(this.#tables[tableName].records.values()) : [];
    }

    withId(tableName, id) {
        if (this.#tables[tableName]) {
            return this.#tables[tableName].records.get(id);
        }

        return null;
    }

    get tables() {
        return this.#tables;
    }
}
