import { BaseMenu } from "./BaseMenu.js";

export class PatientsMenu extends BaseMenu {
    constructor() {
        super("Menu de cadastro de pacientes");

        this._addCommand("Cadastrar novo paciente", this.register);
        this._addCommand("Excluir paciente", this.delete);
        this._addCommand("Listar pacientes (ordenado por CPF)", this.listOrderedByCpf);
        this._addCommand("Listar pacientes (ordenado por nome)", this.listOrderedByName);
        this._addCommand("Voltar para o menu principal", this._stop);
    }

    // #fetchPatients() {}

    register() {
        console.log("register new patient");
    }

    delete() {
        console.log("delete patient");
    }

    listOrderedByCpf() {
        console.log("list ordered by cpf");
    }

    listOrderedByName() {
        console.log("list ordered by name");
    }
}
