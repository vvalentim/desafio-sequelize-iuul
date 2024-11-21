import { MemoryRepository } from "./MemoryRepository.js";

export class PatientsRepository extends MemoryRepository {
    constructor() {
        super("patients");
    }
}
