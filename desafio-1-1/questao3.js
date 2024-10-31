import { Poligono } from "./models/Poligono.js";
import { Vertice } from "./models/Vertice.js";

const main = () => {
    const poligonos = [
        new Poligono([new Vertice(0, 0), new Vertice(2, 2), new Vertice(4, 0), new Vertice(2, -2)]),
        new Poligono([new Vertice(1, 2), new Vertice(3, 4), new Vertice(5, 1)]),
    ];

    for (const poligono of poligonos) {
        console.log("--------");
        console.log(`qntdVertices: ${poligono.qntdVertices}`);
        console.log(`perimetro: ${poligono.perimetro}`);
    }
};

main();
