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

    get ladosOrdenados() {
        return [this.#AB, this.#BC, this.#CA].sort((a, b) => a - b);
    }

    static validar(AB, BC, CA) {
        return AB + BC > CA && BC + CA > AB && CA + AB > BC;
    }

    static clone(triangulo) {
        return new Triangulo(triangulo.va, triangulo.vb, triangulo.vc);
    }

    // SSS Congruence Rule
    static equals(t1, t2) {
        // Igualdade por referência, já que os vértices não podem ser modificados
        if (t1 !== t2) {
            const a = t1.ladosOrdenados;
            const b = t2.ladosOrdenados;

            for (var i = 0; i < a.length; ++i) {
                // Offset para comparar se os lados são "aproximadamente" iguais
                if (Math.abs(a[i] - b[i]) >= 0.025) {
                    return false;
                }
            }
        }

        return true;
    }
}
