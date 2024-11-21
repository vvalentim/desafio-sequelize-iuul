import { BaseMenu } from "./BaseMenu.js";

export class AppointmentsMenu extends BaseMenu {
    constructor() {
        super("Menu de cadastro de pacientes");

        this._addCommand("Agendar consulta", this.schedule);
        this._addCommand("Cancelar angedamento", this.cancel);
        this._addCommand("Listar agenda", this.list);
        this._addCommand("Voltar para o menu principal", this._stop);
    }

    // #fetchAppointments() {}

    schedule() {
        console.log("schedule a new appointment");
    }

    cancel() {
        console.log("cancel an appointment");
    }

    list() {
        console.log("list ordered by cpf");
    }
}
