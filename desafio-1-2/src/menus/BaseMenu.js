import { getInput } from "../helpers/getInput.js";
import { isNumeric } from "../helpers/validate.js";

export class BaseMenu {
    #title = "";
    #options = [];
    _isRunning = false;

    constructor(title) {
        this.#title = title;
    }

    // All commands should be methods of a child class of BaseMenu,
    // to prevent unintended effects when applying the context on callback execution.
    _addCommand(label, callback) {
        this.#options.push({ label, callback });
    }

    #listOptions() {
        this.#options.forEach((option, index) => {
            console.log(`${index + 1} - ${option.label}`);
        });

        process.stdout.write("\n");
    }

    #promptOptionNumber() {
        const option = getInput("Selecione uma opção: ");

        return isNumeric(option) ? parseInt(option) - 1 : -1;
    }

    _stop() {
        this._isRunning = false;
    }

    run() {
        console.clear();

        this._isRunning = true;

        console.log(this.#title + "\n");

        while (this._isRunning) {
            this.#listOptions();

            const option = this.#promptOptionNumber();

            console.clear();

            if (option >= 0 && option < this.#options.length) {
                // Execute the callback using the context of the current menu instance
                this.#options[option].callback.call(this);
                // DON'T DO THIS
                // this.#options[option].callback();
            } else {
                console.log("Opção inválida!\n");
            }
        }
    }
}
