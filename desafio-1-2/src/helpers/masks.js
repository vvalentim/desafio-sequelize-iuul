const maskCpf = (string) => {
    string = string.replace(/\D/g, "");
    string = string.replace(/(\d{3})(\d)/, "$1.$2");
    string = string.replace(/(\d{3})(\d)/, "$1.$2");
    string = string.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return string;
};

export { maskCpf };
