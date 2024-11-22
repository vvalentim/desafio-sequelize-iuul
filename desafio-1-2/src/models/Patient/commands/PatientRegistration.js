import { CpfAlreadyRegisteredException } from "../errors/CpfAlreadyRegisteredException.js";

export class PatientRegistration {
    #patientRepository;

    constructor(patientRepository) {
        this.#patientRepository = patientRepository;
    }

    execute(patient) {
        if (this.#patientRepository.findByCpf(patient.cpf)) {
            throw new CpfAlreadyRegisteredException(`CPF '${patient.cpf}' já cadastrado.`);
        }

        this.#patientRepository.save(patient);
    }
}
