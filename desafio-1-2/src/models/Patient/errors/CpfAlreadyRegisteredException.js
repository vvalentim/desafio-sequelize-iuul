export class CpfAlreadyRegisteredException extends Error {
    constructor(message) {
        super(message);
        this.name = "CpfAlreadyRegisteredException";
    }
}
