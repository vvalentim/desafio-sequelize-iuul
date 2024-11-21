import { getAgeFromDate } from "../helpers/getAgeFromDate";

export class Patient {
    #cpf;
    #name;
    #birthdate;

    constructor(cpf, name, birthdate) {
        this.#cpf = cpf;
        this.#name = name;
        this.#birthdate = birthdate;
    }

    get cpf() {
        return this.#cpf;
    }

    get name() {
        return this.#name;
    }

    get birthdate() {
        return this.#birthdate;
    }

    get age() {
        return getAgeFromDate(this.#birthdate);
    }
}
