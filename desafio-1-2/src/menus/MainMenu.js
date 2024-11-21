import { BaseMenu } from "./BaseMenu.js";

export class MainMenu extends BaseMenu {
    #patientsMenu;
    #appointmentsMenu;

    constructor(patientsMenu, appointmentsMenu) {
        super("Menu principal");

        this.#patientsMenu = patientsMenu;
        this.#appointmentsMenu = appointmentsMenu;

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
