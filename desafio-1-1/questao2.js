import { Triangulo } from "./models/Triangulo.js";
import { ValidationError } from "./errors/ValidationError.js";
import { ImmutableObjectError } from "./errors/ImmutableObjectError.js";
import { promptVertices } from "./helpers/promptVertices.js";

const main = () => {
    const qntdTriangulos = 3;
    const triangulos = [];

    for (let i = 0; i < qntdTriangulos; i++) {
        console.log(`--------- Definição do Triangulo ${i + 1} ---------`);

        const qntdVertices = 3;
        const vertices = promptVertices(qntdVertices);
        const triangulo = new Triangulo(vertices[0], vertices[1], vertices[2]);

        triangulos.push(triangulo);

        console.log(`Perímetro: ${triangulo.perimetro}`);
        console.log(`Área: ${triangulo.area}`);
        console.log(`Tipo: ${triangulo.tipo}`);
        console.log(`Lados ordenados: ${triangulo.ladosOrdenados}`);
    }

    console.log("--------- Comparação ---------");

    for (let i = 0; i < qntdTriangulos; i++) {
        const j = (i + 1) % qntdTriangulos;

        console.log(
            `T${i + 1} x T${j + 1} (equals): ${Triangulo.equals(triangulos[i], triangulos[j])}`
        );
    }
};

try {
    main();
} catch (err) {
    if (err instanceof ValidationError) {
        console.log(`Exceção ao instanciar Triangulo (${err.message})`);
    } else if (err instanceof ImmutableObjectError) {
        console.log(`Exceção ao tentar alterar o vértice de um triangulo (${err.message})`);
    } else {
        console.log(err.message);
    }
}

// const hardcoded = () => {
//     const v1 = new Vertice(1, 0);
//     const v2 = new Vertice(-1, 0);
//     const v3 = new Vertice(0, Math.sqrt(3));

//     const t1 = new Triangulo(v1, v2, v3);

//     const v4 = new Vertice(0.5, 0.866);
//     const v5 = new Vertice(-0.5, -0.866);
//     const v6 = new Vertice(-1.5, 0.866);

//     const t2 = new Triangulo(v4, v5, v6);

//     console.log("----------------------------");
//     console.log(`Lados (t1): ${t1.ladosOrdenados.join(" ")}`);
//     console.log(`Lados (t2): ${t2.ladosOrdenados.join(" ")}`);
//     console.log("----------------------------");
//     console.log(`Tipo t1: ${t1.tipo}`);
//     console.log(`Perimetro t1: ${t1.perimetro}`);
//     console.log(`Area t1: ${t1.area}`);
//     console.log("----------------------------");
//     console.log(`Tipo t2: ${t2.tipo}`);
//     console.log(`Perimetro t1: ${t2.perimetro}`);
//     console.log(`Area t2: ${t2.area}`);
//     console.log("----------------------------");
//     console.log(`Equals (t1, t2): ${Triangulo.equals(t1, t2)}`);

//     try {
//         const t4 = new Triangulo(v1, v2, v3);

//         t4.vb.move(0, 0);
//     } catch (err) {
//         if (err instanceof ValidationError) {
//             console.log(`Exceção ao instanciar Triangulo (${err.message})`);
//         } else if (err instanceof ImmutableObjectError) {
//             console.log(`Exceção ao tentar alterar o vértice de um triangulo (${err.message})`);
//         } else {
//             console.log(err.message);
//         }
//     }
// };
