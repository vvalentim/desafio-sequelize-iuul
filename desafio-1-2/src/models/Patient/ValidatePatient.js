import { DateTime } from "luxon";
import { isAlphabetic } from "../../helpers/validate";

const isValidCpf = (string) => {
    string = string.replace(/\D/g, "");

    if (string.length != 11) {
        return false;
    }

    if (/(\d)\1{10}/.test(string)) {
        return false;
    }

    // TODO: sum algorithm implementation

    return true;
};

const isValidName = (string) => {
    if (!isAlphabetic(string) || string.length < 5) {
        return false;
    }

    return true;
};

const isAllowedAge = (
    birthdate,
    expectedAge,
    { dateFormat = "dd/MM/yyyy", startingDate = null }
) => {
    if (startingDate === null) {
        startingDate = DateTime.now();
    }

    if (typeof birthdate === "string") {
        birthdate = DateTime.fromFormat(birthdate, dateFormat);
    }

    const diff = Math.floor(birthdate.diff(startingDate, "years").years * -1);

    return diff >= expectedAge;
};

export { isValidCpf, isValidName, isAllowedAge };
