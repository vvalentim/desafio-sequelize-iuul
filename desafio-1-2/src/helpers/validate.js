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

const isValidDateFormat = (date, format = "dd/MM/yyyy") => {
    return DateTime.fromFormat(date, format).isValid;
};

export { isNumeric, isAlphabetic, isValidDateFormat };
