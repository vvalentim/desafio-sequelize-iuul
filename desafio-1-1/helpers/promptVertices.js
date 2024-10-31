import { Vertice } from "../models/Vertice.js";
import { getInput } from "./getInput.js";

const promptVertices = (numeroVertices) => {
    const vertices = [];

    console.log(
        "Informe a composição dos vértices com os valores das coordenadas separadas por um único caractere em branco (espaço)."
    );
    console.log("Exemplo: x y");

    for (let i = 0; i < numeroVertices; i++) {
        const coords = getInput(`Vértice ${i + 1}: `);

        const [x, y] = coords.split(" ");

        vertices.push(new Vertice(x, y));
    }

    return vertices;
};

export { promptVertices };
