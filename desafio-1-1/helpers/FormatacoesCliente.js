const formatarNome = (valor) => valor.replace(/\s+/g, " ").trim();

const formatarCpf = (valor) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return valor;
};

const formatarRenda = (valor) => {
    return Number(valor.replace(",", ".")).toFixed(2);
};

const FormatacoesCliente = {
    nome: formatarNome,
    cpf: formatarCpf,
    rendaMensal: formatarRenda,
    estadoCivil: (valor) => valor.toUpperCase(),
    dependentes: (valor) => Number(valor),
};

export { FormatacoesCliente };
