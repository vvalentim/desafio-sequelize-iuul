const apenasLetras = (string) => !/[^\p{Script=Latin} ]/u.test(string);

export { apenasLetras };
