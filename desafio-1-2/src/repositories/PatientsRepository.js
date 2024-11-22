import { MemoryRepository } from "./MemoryRepository.js";

export class PatientsRepository extends MemoryRepository {
    constructor() {
        super("patients");
    }

    findByCpf(cpf) {
        return this.fetchAll().find((record) => record.cpf === cpf) ?? null;
    }

    fetchOrderedByCpf() {
        return this.fetchAll().sort((a, b) => a.cpf.localeCompare(b.cpf));
    }

    fetchOrderedByName() {
        return this.fetchAll().sort((a, b) => a.name.localeCompare(b.name));
    }
}
