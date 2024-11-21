const capitalize = (string) => {
    string = string.split("");
    string[0] = string[0].toUpperCase();

    return string.join("");
};

const capitalizeWithSpaces = (string) => {
    return capitalize(string)
        .replace(/([A-Z])/g, " $1")
        .trim();
};

export { capitalize, capitalizeWithSpaces };
