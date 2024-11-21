import { MemoryRepository } from "./MemoryRepository.js";

export class AppointmentsRepository extends MemoryRepository {
    constructor() {
        super("appointments");
    }

    fetchFutureAppointments() {}
}
