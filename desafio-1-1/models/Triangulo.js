import { Vertice } from "./Vertice.js";
import { ValidationError } from "../errors/ValidationError.js";

export class Triangulo {
    #AB;
    #BC;
    #CA;

    #va;
    #vb;
    #vc;

    constructor(va, vb, vc) {
        this.#AB = Vertice.distancia(va, vb);
        this.#BC = Vertice.distancia(vb, vc);
        this.#CA = Vertice.distancia(vc, va);

        if (!Triangulo.validar(this.#AB, this.#BC, this.#CA)) {
            throw new ValidationError("Os vértices não formam um triângulo válido.");
        }

        // Copia os valores e não a referência, inicializa os vértices imutáveis
        this.#va = new Vertice(va.x, va.y, true);
        this.#vb = new Vertice(vb.x, vb.y, true);
        this.#vc = new Vertice(vc.x, vc.y, true);
    }

    get va() {
        return this.#va;
    }

    get vb() {
        return this.#vb;
    }

    get vc() {
        return this.#vc;
    }

    get tipo() {
        let tipo = "escaleno";

        if (this.#AB === this.#BC && this.#CA === this.#AB) {
            tipo = "equilátero";
        } else if (this.#AB === this.#BC || this.#BC === this.#CA || this.#CA === this.#AB) {
            tipo = "isósceles";
        }

        return tipo;
    }

    get perimetro() {
        return this.#AB + this.#BC + this.#CA;
    }

    get area() {
        const s = this.perimetro / 2;

        return Math.sqrt(s * (s - this.#AB) * (s - this.#BC) * (s - this.#CA));
    }

    static validar(AB, BC, CA) {
        return AB + BC > CA && BC + CA > AB && CA + AB > BC;
    }

    static clone(triangulo) {
        return new Triangulo(triangulo.va, triangulo.vb, triangulo.vc);
    }

    static equals(t1, t2) {
        return (
            Vertice.equals(t1.va, t2.va) &&
            Vertice.equals(t1.vb, t2.vb) &&
            Vertice.equals(t1.vc, t2.vc)
        );
    }
}
