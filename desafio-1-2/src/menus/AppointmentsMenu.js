import { BaseMenu } from "./BaseMenu.js";

import { getInputAndValidate } from "../helpers/getInput.js";
import { isValidCpf } from "../models/Patient/PatientValidators.js";
import { PatientsRepository } from "../repositories/PatientsRepository.js";
import {
    isValidAppointmentDate,
    isValidBusinessHour,
    isValidAppointmentInterval,
} from "../models/Appointment/AppointmentValidators.js";
import { Appointment } from "../models/Appointment/Appointment.js";
import { AppointmentsRepository } from "../repositories/AppointmentsRepository.js";

export class AppointmentsMenu extends BaseMenu {
    constructor() {
        super("Menu de cadastro de pacientes");

        this._addCommand("Agendar consulta", this.schedule);
        this._addCommand("Cancelar angedamento", this.cancel);
        this._addCommand("Listar agenda", this.list);
        this._addCommand("Voltar para o menu principal", this._stop);
    }

    schedule() {
        const cpf = getInputAndValidate("CPF: ", [
            { callback: isValidCpf, errorMessage: "CPF inválido." },
        ]);

        const patientsRepository = new PatientsRepository();

        if (!patientsRepository.findByCpf(cpf)) {
            console.log("Erro: paciente não cadastrado.\n");

            return;
        }

        const date = getInputAndValidate("Data da consulta: ", [
            {
                callback: isValidAppointmentDate,
                errorMessage: "A data para a consulta deve ser do dia atual ou posterior.",
            },
        ]);

        const startingAt = getInputAndValidate("Hora inicial: ", [
            { callback: isValidBusinessHour, errorMessage: "Hora inicial inválida." },
        ]);

        const endingAt = getInputAndValidate("Hora final: ", [
            {
                callback: isValidBusinessHour,
                errorMessage: "Hora final inválida.",
            },
            {
                callback: (input) => isValidAppointmentInterval(startingAt, input),
                errorMessage: "A hora final deve ser posterior a inicial.",
            },
        ]);

        console.log(cpf, date, startingAt, endingAt);

        // try {
        //     const appointment = new Appointment({patientCpf: cpf, date, startingAt, endingAt });
        //     const appointmentsRepository = new AppointmentsRepository();

        // } catch (err) {

        // }
    }

    cancel() {
        console.log("cancel an appointment");
    }

    list() {
        console.log("list ordered by cpf");
    }
}
