export class ImmutableObjectError extends Error {
    constructor(message) {
        super(message);
        this.name = "ImmutableObjectError";
    }
}
