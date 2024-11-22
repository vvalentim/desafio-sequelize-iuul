import PromptSync from "prompt-sync";

const getInput = PromptSync({ sigint: true });

const getInputAndValidate = (promptText, validations = []) => {
    let input = "";
    let isValid = false;

    while (!isValid) {
        let error = null;

        input = getInput(promptText);

        for (const validation of validations) {
            if (!validation.callback.call(null, input)) {
                error = validation.errorMessage;
                break;
            }
        }

        if (error === null) {
            isValid = true;
        } else {
            console.log(error);
        }
    }

    return input;
};

export { getInput, getInputAndValidate };
