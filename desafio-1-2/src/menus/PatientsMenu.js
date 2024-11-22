import Table from "cli-table";

import { BaseMenu } from "./BaseMenu.js";

import { Patient } from "../models/Patient/Patient.js";
import { PatientsRepository } from "../repositories/PatientsRepository.js";
import { AppointmentsRepository } from "../repositories/AppointmentsRepository.js";

import { PatientRegistration } from "../models/Patient/commands/PatientRegistration.js";
import { PatientRecordRemoval } from "../models/Patient/commands/PatientRecordRemoval.js";

import { getInputAndValidate } from "../helpers/getInput.js";
import { isAllowedAge, isValidCpf, isValidName } from "../models/Patient/PatientValidators.js";
import { isValidDateFormat } from "../helpers/validate.js";
import { maskCpf } from "../helpers/masks.js";

import { HasFutureAppointmentException } from "../models/Patient/errors/HasFutureAppointmentException.js";
import { CpfAlreadyRegisteredException } from "../models/Patient/errors/CpfAlreadyRegisteredException.js";

export class PatientsMenu extends BaseMenu {
    constructor() {
        super("Menu de cadastro de pacientes");

        this._addCommand("Cadastrar novo paciente", this.register);
        this._addCommand("Excluir paciente", this.delete);
        this._addCommand("Listar pacientes (ordenado por CPF)", this.listOrderedByCpf);
        this._addCommand("Listar pacientes (ordenado por nome)", this.listOrderedByName);
        this._addCommand("Voltar para o menu principal", this._stop);
    }

    register() {
        const cpf = getInputAndValidate("CPF: ", [
            { callback: isValidCpf, errorMessage: "CPF inválido." },
        ]);

        const name = getInputAndValidate("Nome: ", [
            {
                callback: isValidName,
                errorMessage: "O nome deve conter pelo menos 5 caracteres alfabéticos.",
            },
        ]);

        const birthdate = getInputAndValidate("Data de nascimento: ", [
            {
                callback: isValidDateFormat,
                errorMessage:
                    "A data de nascimento informada não possui formato válido (dd/mm/yyyy).",
            },
            {
                callback: isAllowedAge,
                errorMessage: "O paciente deve ter pelo menos 13 anos.",
            },
        ]);

        // TODO: input formatting before storing records, maybe on model instantiation?

        try {
            const patient = new Patient({ cpf, name, birthdate });
            const patientsRepository = new PatientsRepository();
            const registrationCommand = new PatientRegistration(patientsRepository);

            registrationCommand.execute(patient);

            console.log("Paciente cadastrado com sucesso.\n");
        } catch (err) {
            if (err instanceof CpfAlreadyRegisteredException) {
                console.log(`Erro: ${err.message}\n`);

                return;
            } else {
                throw err;
            }
        }
    }

    delete() {
        const cpf = getInputAndValidate("CPF: ", [
            { callback: isValidCpf, errorMessage: "CPF inválido." },
        ]);

        try {
            const patientsRepository = new PatientsRepository();
            const record = patientsRepository.findByCpf(cpf);

            if (record === null) {
                console.log("Erro: paciente não cadastrado.\n");
                return;
            }

            const appointmentsRepository = new AppointmentsRepository();
            const removalCommand = new PatientRecordRemoval(
                patientsRepository,
                appointmentsRepository
            );

            removalCommand.execute(record);

            console.log("O cadastro do paciente foi removido com sucesso.\n");
        } catch (err) {
            if (err instanceof HasFutureAppointmentException) {
                console.log(`Erro: ${err.message}\n`);

                return;
            } else {
                throw err;
            }
        }
    }

    listRecords(records) {
        const table = new Table({
            head: ["CPF", "Nome", "Dt.Nasc.", "Idade"],
            colWidths: [30, 80, 20, 10],
        });

        table.push(
            ...records.map((record) => [
                maskCpf(record.cpf),
                record.name,
                record.birthdate,
                record.age,
            ])
        );

        console.log(table.toString());
    }

    listOrderedByCpf() {
        const patientsRepository = new PatientsRepository();

        this.listRecords(patientsRepository.fetchOrderedByCpf());
    }

    listOrderedByName() {
        const patientsRepository = new PatientsRepository();

        this.listRecords(patientsRepository.fetchOrderedByName());
    }
}
