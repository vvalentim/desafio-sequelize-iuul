import { DateTime } from "luxon";

const isNumeric = (string, options = { allowNegative: false, hasDecimalCharacter: false }) => {
    // TODO: validate optional params
    if (options.allowNegative === false && options.hasDecimalCharacter === false) {
        return !/[^\d]/.test(string);
    }

    return false;
};

const isAlphabetic = (string, whiteSpace = true) => {
    if (whiteSpace === true) {
        return !/[^\p{Script=Latin} ]/u.test(string);
    }

    return !/[^\p{Script=Latin}]/u.test(string);
};

const isOlderThan = (birthdate, expectedAge, startingDate = null) => {
    if (startingDate === null) {
        startingDate = DateTime.now();
    }

    if (typeof birthdate === "string") {
        birthdate = DateTime.fromFormat(birthdate, "dd/MM/yyyy");
    }

    return birthdate.diff(startingDate, "years").years < expectedAge;
};

export { isNumeric, isAlphabetic, isOlderThan };
