export class HasFutureAppointmentException extends Error {
    constructor(message) {
        super(message);
        this.name = "HasFutureAppointmentException";
    }
}
