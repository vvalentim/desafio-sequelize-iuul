import { ImmutableObjectError } from "../errors/ImmutableObjectError.js";

export class Vertice {
    #x;
    #y;
    #imutavel;

    constructor(x, y, imutavel = false) {
        this.#x = x;
        this.#y = y;
        this.#imutavel = imutavel;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    move(x, y) {
        if (this.#imutavel) {
            throw new ImmutableObjectError(
                "O vértice não pode ser alterado pois foi inicializado como imutável."
            );
        }

        this.#x = x;
        this.#y = y;
    }

    distancia(v2) {
        return Vertice.distancia(this, v2);
    }

    static distancia(v1, v2) {
        const x = Math.pow(v1.x - v2.x, 2);
        const y = Math.pow(v1.y - v2.y, 2);

        return Number(Math.sqrt(x + y).toFixed(2));
    }

    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y;
    }
}
