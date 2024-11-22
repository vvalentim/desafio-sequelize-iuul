import { DateTime } from "luxon";

export class Appointment {
    #id;
    #patientCpf;
    #date;
    #startingAt;
    #endingAt;

    constructor({ id = null, patientCpf, date, startingAt, endingAt }) {
        this.#id = id;
        this.#patientCpf = patientCpf;
        this.#date = date;
        this.#startingAt = startingAt;
        this.#endingAt = endingAt;
    }

    get id() {
        return this.#id;
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

    toString() {
        return JSON.stringify({
            id: this.id,
            patientCpf: this.patientCpf,
            date: this.date,
            startingAt: this.startingAt,
            endingAt: this.endingAt,
        });
    }

    copyWith({ id, patientCpf, date, startingAt, endingAt }) {
        return new Appointment({
            id: id ?? this.#id,
            patientCpf: patientCpf ?? this.#patientCpf,
            date: date ?? this.#date,
            startingAt: startingAt ?? this.#startingAt,
            endingAt: endingAt ?? this.#endingAt,
        });
    }

    isFutureAppointment() {
        return DateTime.fromFormat("22/11/2024 0921", "dd/MM/yyyy hhmm").diffNow("minutes") >= 0;
    }
}
