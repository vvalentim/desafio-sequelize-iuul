import { BaseMenu } from "./BaseMenu.js";

import { AppointmentsMenu } from "./AppointmentsMenu.js";
import { PatientsMenu } from "./PatientsMenu.js";

export class MainMenu extends BaseMenu {
    #patientsMenu = new PatientsMenu();
    #appointmentsMenu = new AppointmentsMenu();

    constructor() {
        super("Menu principal");

        this._addCommand("Cadastro de pacientes", this.showPatientsMenu);
        this._addCommand("Agenda", this.showAppointmentsMenu);
        this._addCommand("Fim", this._stop);
    }

    _stop() {
        super._stop();

        console.log("Aplicação finalizada com sucesso.");
    }

    showPatientsMenu() {
        this.#patientsMenu.run();
    }

    showAppointmentsMenu() {
        this.#appointmentsMenu.run();
    }
}
