import { getAgeFromDate } from "../helpers/getAgeFromDate.js";

export class Patient {
    #id;
    #cpf;
    #name;
    #birthdate;

    constructor({ id = null, cpf, name, birthdate }) {
        this.#id = id;
        this.#cpf = cpf;
        this.#name = name;
        this.#birthdate = birthdate;
    }

    get id() {
        return this.#id;
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

    toString() {
        return JSON.stringify({
            id: this.id,
            cpf: this.patientCpf,
            name: this.name,
            birthdate: this.birthdate,
            age: this.age,
        });
    }

    copyWith({ id, cpf, name, birthdate }) {
        return new Patient({
            id: id ?? this.#id,
            cpf: cpf ?? this.#cpf,
            name: name ?? this.#name,
            birthdate: birthdate ?? this.#birthdate,
        });
    }
}
