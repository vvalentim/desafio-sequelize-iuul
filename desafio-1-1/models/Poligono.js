import { Vertice } from "./Vertice.js";
import { ValidationError } from "../errors/ValidationError.js";

export class Poligono {
    #vertices = [];

    constructor(vertices) {
        if (Poligono.verificarColinearidade(vertices)) {
            throw new ValidationError("Os vértices informados não formam um polígono válido.");
        }

        vertices = vertices.map((vertice) => new Vertice(vertice.x, vertice.y, true));

        this.#vertices.push(...vertices);
    }

    get perimetro() {
        let perimetro = 0;

        for (let i = 0; i < this.qntdVertices; i++) {
            perimetro += Vertice.distancia(
                this.#vertices[i],
                this.#vertices[(i + 1) % this.qntdVertices]
            );
        }

        return perimetro;
    }

    get qntdVertices() {
        return this.#vertices.length;
    }

    addVertice(novoVertice) {
        if (novoVertice instanceof Vertice) {
            for (const vertice of this.#vertices) {
                if (Vertice.equals(vertice, novoVertice)) {
                    return false;
                }
            }

            this.#vertices.push(new Vertice(novoVertice.x, novoVertice.y, true));
        }

        return false;
    }

    // Shoelace Formula
    static verificarColinearidade(vertices) {
        const numVertices = vertices.length;

        if (numVertices >= 3) {
            let area = 0;

            for (let i = 0; i < numVertices; i++) {
                const j = (i + 1) % numVertices;
                area += vertices[i].x * vertices[j].y - vertices[i].y * vertices[j].x;
            }

            return Math.abs(area) / 2 === 0;
        }

        return true;
    }
}
