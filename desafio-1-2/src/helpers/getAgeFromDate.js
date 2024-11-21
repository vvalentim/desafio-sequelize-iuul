import { DateTime } from "luxon";

const getAgeFromDate = (birthdate) => {
    birthdate = DateTime.fromFormat(birthdate, "dd/MM/yyyy");

    return Math.floor(birthdate.diffNow("years").years * -1);
};

export { getAgeFromDate };
