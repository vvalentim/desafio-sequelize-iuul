import { HasFutureAppointmentException } from "../errors/HasFutureAppointmentException.js";

export class PatientRecordRemoval {
    #patientsRepository;
    #appointmentsRepository;

    constructor(patientsRepository, appointmentsRepository) {
        this.#patientsRepository = patientsRepository;
        this.#appointmentsRepository = appointmentsRepository;
    }

    execute(patient) {
        const futureAppointments = this.#appointmentsRepository.fetchFutureAppointments();
        const patientHasFutureAppointment = futureAppointments.find(
            (record) => record.patientCpf === patient.cpf
        );

        if (!patientHasFutureAppointment) {
            this.#appointmentsRepository.deleteWithCpf(patient.cpf);
            this.#patientsRepository.delete(patient.id);
        } else {
            throw new HasFutureAppointmentException(
                `O paciente com CPF '${patient.cpf}' possui agendamentos futuros, não é possível excluir.`
            );
        }
    }
}
