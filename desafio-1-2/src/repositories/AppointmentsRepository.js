import { MemoryRepository } from "./MemoryRepository.js";

export class AppointmentsRepository extends MemoryRepository {
    constructor() {
        super("appointments");
    }

    fetchFutureAppointments() {
        return this.fetchAll().filter((record) => record.isFutureAppointment());
    }

    deleteWithCpf(cpf) {
        const appointments = this.fetchAll((record) => record.patientCpf === cpf);

        for (const appointment of appointments) {
            this.delete(appointment.id);
        }
    }
}
