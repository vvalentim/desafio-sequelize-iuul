import { promptVertices } from "./helpers/promptVertices.js";
import { Vertice } from "./models/Vertice.js";

const main = () => {
    const qntdVertices = 3;
    const vertices = promptVertices(qntdVertices);

    for (let i = 0; i < qntdVertices; i++) {
        const j = (i + 1) % qntdVertices;

        console.log(`--- Comparação (v${i + 1}, v${j + 1}) ---`);
        console.log(`Equals: ${Vertice.equals(vertices[i], vertices[j])}`);
        console.log(`Distancia: ${Vertice.distancia(vertices[i], vertices[j]).toFixed(2)}`);
    }
};

main();

// const hardcoded = () => {
//     const v1 = new Vertice(3.0, 3.5);
//     const v2 = new Vertice(1.5, 5.0);
//     const v3 = new Vertice(3.0, 3.5);

//     console.log(`Getters v1: x(${v1.x}), y(${v1.y})`);

//     console.log(`Distancia Euclidiana entre v1 e v2: ${Vertice.distancia(v1, v2).toFixed(2)}`);
//     console.log(`Distancia Euclidiana entre v1 e v3: ${Vertice.distancia(v1, v3).toFixed(2)}`);
//     // Método alternativo "getter"
//     console.log(`Distancia Euclidiana entre v2 e v3: ${v2.distancia(v3).toFixed(2)}`);

//     console.log(`Equals (v1, v2): ${Vertice.equals(v1, v2)}`);
//     console.log(`Equals (v1, v3): ${Vertice.equals(v1, v3)}`);
//     console.log(`Equals referência (v1): ${v1 === v1}`);
//     console.log(`Equals referência (v1, v3): ${v1 === v2}`);
// };
