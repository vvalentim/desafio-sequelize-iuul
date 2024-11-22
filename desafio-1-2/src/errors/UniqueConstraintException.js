export class UniqueConstraintException extends Error {
    constructor(message) {
        super(message);
        this.name = "UniqueConstraintException";
    }
}
