import { MemoryDb } from "../db/MemoryDb.js";

export class MemoryRepository {
    #db = MemoryDb.instance;
    #tableName = null;

    constructor(tableName) {
        this.#tableName = tableName;
    }

    fetchAll() {
        return this.#db.records(this.#tableName);
    }

    fetchById(id) {
        return this.#db.withId(this.#tableName, id);
    }

    save(record) {
        if (record.id === null) {
            const id = this.#db.currentIdFrom(this.#tableName);

            if (id === null) {
                return null;
            }

            record = record.copyWith({ id });
        }

        this.#db.save(this.#tableName, record);

        return record;
    }

    delete(id) {
        this.#db.delete(this.#tableName, id);
    }
}
