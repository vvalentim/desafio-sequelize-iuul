import { UniqueConstraintException } from "../../../errors/UniqueConstraintException.js";

export class PatientRegistration {
    #patientRepository;

    constructor(patientRepository) {
        this.#patientRepository = patientRepository;
    }

    execute(patient) {
        if (this.#patientRepository.findByCpf(patient.cpf)) {
            throw new UniqueConstraintException(`CPF '${patient.cpf}' já cadastrado.`);
        }

        this.#patientRepository.save(patient);
    }
}
