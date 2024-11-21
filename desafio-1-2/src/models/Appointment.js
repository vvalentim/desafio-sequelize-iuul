export class Appointment {
    #patientCpf;
    #date;
    #startingAt;
    #endingAt;

    constructor(patientCpf, date, startingAt, endingAt) {
        this.#patientCpf = patientCpf;
        this.#date = date;
        this.#startingAt = startingAt;
        this.#endingAt = endingAt;
    }

    get patientCpf() {
        return this.#patientCpf;
    }

    get date() {
        return this.#date;
    }

    get startingAt() {
        return this.#startingAt;
    }

    get endingAt() {
        return this.#endingAt;
    }
}
