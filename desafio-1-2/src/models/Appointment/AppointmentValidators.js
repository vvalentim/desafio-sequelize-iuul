import { DateTime, Interval } from "luxon";

const isValidAppointmentDate = (string) => {
    const date = DateTime.fromFormat(string, "dd/MM/yyyy");

    if (!date.isValid) {
        return false;
    }

    return date.diffNow("day").days > -1;
};

const isValidBusinessHour = (string) => {
    const time = DateTime.fromFormat(string, "HHmm");

    if (!time.isValid) {
        return false;
    }

    if (time.minute % 15 != 0) {
        return false;
    }

    if (time.diff(DateTime.now(), "minutes").minutes < 1) {
        return false;
    }

    const initialBusinessHour = DateTime.fromFormat("0800", "HHmm");
    const endingBusinessHour = DateTime.fromFormat("1901", "HHmm");
    const interval = Interval.fromDateTimes(initialBusinessHour, endingBusinessHour);

    return interval.contains(time);
};

const isValidAppointmentInterval = (start, end) => {
    start = DateTime.fromFormat(start, "HHmm");
    end = DateTime.fromFormat(end, "HHmm");

    return end.diff(start, "minutes").minutes > 0;
};

export { isValidAppointmentDate, isValidBusinessHour, isValidAppointmentInterval };
