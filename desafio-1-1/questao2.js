import { Vertice } from "./models/Vertice.js";
import { Triangulo } from "./models/Triangulo.js";
import { ValidationError } from "./errors/ValidationError.js";
import { ImmutableObjectError } from "./errors/ImmutableObjectError.js";

const main = () => {
    const v1 = new Vertice(1, 1);
    const v2 = new Vertice(4, 1);
    const v3 = new Vertice(2.5, 3);

    const t1 = new Triangulo(v1, v2, v3);
    const t2 = Triangulo.clone(t1);

    const v4 = new Vertice(1, 3);
    const v5 = new Vertice(1, 5);
    const v6 = new Vertice(2, 6);
    const t3 = new Triangulo(v4, v5, v6);

    console.log(`Tipo t1: ${t1.tipo}`);
    console.log(`Perimetro t1: ${t1.perimetro}`);
    console.log(`Equals (t1, t2): ${Triangulo.equals(t1, t2)}`);
    console.log(`Area t1: ${t1.area}`);
    console.log("----------------------------");
    console.log(`Tipo t3: ${t3.tipo}`);
    console.log(`Perimetro t1: ${t3.perimetro}`);
    console.log(`Equals (t3, t2): ${Triangulo.equals(t3, t2)}`);
    console.log(`Area t3: ${t3.area}`);

    try {
        const t4 = new Triangulo(v1, v2, v3);

        t4.vb.move(0, 0);
    } catch (err) {
        if (err instanceof ValidationError) {
            console.log(`Exceção ao instanciar Triangulo (${err.message})`);
        } else if (err instanceof ImmutableObjectError) {
            console.log(`Exceção ao tentar alterar o vértice de um triangulo (${err.message})`);
        } else {
            console.log(err.message);
        }
    }
};

main();
