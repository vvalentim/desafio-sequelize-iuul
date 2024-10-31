import { ValidacoesCliente } from "./helpers/ValidacoesCliente.js";
import { FormatacoesCliente } from "./helpers/FormatacoesCliente.js";
import { getInput } from "./helpers/getInput.js";
import { capitalizeWithSpaces } from "./helpers/capitalize.js";

const dados = {
    nome: null,
    cpf: null,
    nascimento: null,
    rendaMensal: null,
    estadoCivil: null,
    dependentes: null,
};

const main = () => {
    const campos = Object.keys(dados);

    for (const campo of campos) {
        const nomeCampo = capitalizeWithSpaces(campo);

        let valor = "";
        let mensagem = "";
        let entradaInvalida = true;

        valor = getInput(`${nomeCampo}: `);

        while (entradaInvalida) {
            mensagem = ValidacoesCliente[campo](valor);
            entradaInvalida = mensagem != "";

            if (entradaInvalida) {
                valor = getInput(`${mensagem} Tente novamente: `);
            }
        }

        if (FormatacoesCliente[campo]) {
            dados[campo] = FormatacoesCliente[campo](valor);
        } else {
            dados[campo] = valor;
        }
    }

    for (const campo of campos) {
        // console.log({ valor: dados[campo], tipo: typeof dados[campo] });
        console.log(`${capitalizeWithSpaces(campo)}: ${dados[campo]}`);
    }
};

main();
