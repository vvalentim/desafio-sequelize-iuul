import { Poligono } from "./models/Poligono.js";
import { promptVertices } from "./helpers/promptVertices.js";
import { getInput } from "./helpers/getInput.js";

const main = () => {
    const qntdVertices = getInput("Informe a quantidade vértices do poligono: ");
    const vertices = promptVertices(qntdVertices);
    const poligono = new Poligono(vertices);

    console.log("--------");
    console.log(`qntdVertices: ${poligono.qntdVertices}`);
    console.log(`perimetro: ${poligono.perimetro}`);
};

main();

// const hardcoded = () => {
//     const poligonos = [
//         new Poligono([new Vertice(0, 0), new Vertice(2, 2), new Vertice(4, 0), new Vertice(2, -2)]),
//         new Poligono([new Vertice(1, 2), new Vertice(3, 4), new Vertice(5, 1)]),
//     ];

//     for (const poligono of poligonos) {
//         console.log("--------");
//         console.log(`qntdVertices: ${poligono.qntdVertices}`);
//         console.log(`perimetro: ${poligono.perimetro}`);
//     }
// };
