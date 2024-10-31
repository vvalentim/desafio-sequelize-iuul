import { DateTime } from "luxon";
import { apenasLetras } from "./apenasLetras.js";
import { apenasNumeros } from "./apenasNumeros.js";

const validarNome = (valor) => {
    if (typeof valor !== "string") {
        return "A valor informado para nome não possui um formato válido.";
    }

    if (valor.length < 5) {
        return "O nome deve conter no mínimo 5 caracteres.";
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
    if (!apenasLetras(valor)) {
        return "O nome deve conter apenas letras ou espaço(s).";
    }

    return "";
};

// Observação: nem todo CPF pode ser representado pelo tipo Number, porque podem iniciar em zero.
// Portanto será considerado do tipo string.
const validarCpf = (valor) => {
    if (typeof valor !== "string") {
        return "O valor informado para CPF não possui um formato válido.";
    }

    if (valor.length !== 11) {
        return "O CPF deve conter exatamente 11 caracteres numéricos.";
    }

    if (!apenasNumeros(valor)) {
        return "O CPF deve conter apenas caracteres numéricos.";
    }

    return "";
};

const validarNascimento = (valor) => {
    // try {

    const nascimento = DateTime.fromFormat(valor, "dd/MM/yyyy");

    if (!nascimento.isValid) {
        return "A valor informado para data não possui um formato válido.";
    }

    if (nascimento.diffNow("years").years > -18) {
        return "A data de nascimento é inválida, o cliente deve ter pelo menos 18 anos.";
    }

    // } catch (_) {
    //     return "A valor informado para data não possui um formato válido.";
    // }

    return "";
};

const validarRenda = (valor) => {
    valor = valor.replaceAll(",", ".");

    if (valor.split(".").length > 2) {
        return "O valor informado para renda não possui um formato numérico válido.";
    }

    valor = Number(valor);

    if (Number.isNaN(valor) && !Number.isFinite(valor)) {
        return "O valor informado para renda não possui um valor numérico válido.";
    }

    if (valor < 0) {
        return "A renda deve ser maior ou igual a zero.";
    }

    return "";
};

const validarEstadoCivil = (valor) => {
    const validos = ["c", "s", "v", "d"];

    if (typeof valor !== "string") {
        return "A valor informado para estado civil não possui um formato válido.";
    }

    if (valor.length != 1 || !validos.includes(valor.toLowerCase())) {
        return "Estado civil inválido, informe apenas a letra inicial das opções: Casado(a), Solteiro(a), Viúvo(a) ou Divorciado(a).";
    }

    return "";
};

const validarDependentes = (valor) => {
    if (!apenasNumeros(valor)) {
        return "O valor informado para dependentes não possui um formato numérico válido.";
    }

    valor = Number(valor);

    if (valor < 0 || valor > 10) {
        return "A quantidade de dependentes deve ser um valor entre 0 e 10.";
    }

    return "";
};

// Validações retornam uma mensagem de erro ou uma string vazia caso o dado esteja correto.
const ValidacoesCliente = {
    nome: validarNome,
    cpf: validarCpf,
    nascimento: validarNascimento,
    rendaMensal: validarRenda,
    estadoCivil: validarEstadoCivil,
    dependentes: validarDependentes,
};

export { ValidacoesCliente };
