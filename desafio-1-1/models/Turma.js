import { ValidationError } from "../errors/ValidationError.js";

export class Turma {
    #alunos = new Map();

    #ordenar() {
        const ordenados = [...this.#alunos.entries()].sort((a, b) => {
            return a[1].nome.localeCompare(b[1].nome);
        });

        this.#alunos = new Map(ordenados);
    }

    inserirAluno(matricula, nome) {
        if (!this.#alunos.has(matricula)) {
            this.#alunos.set(matricula, { matricula, nome, notaP1: null, notaP2: null });
            this.#ordenar();

            return true;
        }

        return false;
    }

    removerAluno(matricula) {
        this.#alunos.delete(matricula);
    }

    #lancarNota(matricula, nota, prova) {
        const aluno = this.#alunos.get(matricula);

        if (nota < 0 || nota > 10) {
            throw new ValidationError("O valor da nota deve ser um valor entre 0.0 e 10.0");
        }

        if (!aluno) {
            throw new ValidationError(`Nenhum aluno cadastrado com a matrícula "${matricula}"`);
        }

        aluno[prova] = nota;
    }

    lancarNotaP1(matricula, nota) {
        this.#lancarNota(matricula, nota, "notaP1");
    }

    lancarNotaP2(matricula, nota) {
        this.#lancarNota(matricula, nota, "notaP2");
    }

    imprimirBoletim() {
        console.log("—----------------------------------------------------------");
        console.log("Matricula\tNome\t\t\tP1\tP2\tNF");

        for (const aluno of this.#alunos.values()) {
            let { matricula, nome, notaP1, notaP2 } = aluno;

            notaP1 ??= 0.0;
            notaP2 ??= 0.0;

            const identificacao = matricula + "\t\t" + nome;
            const notas = notaP1.toFixed(1) + "\t" + notaP2.toFixed(1);
            const notaFinal = (notaP1 + notaP2) / 2;

            console.log(identificacao + "\t\t" + notas + "\t" + notaFinal.toFixed(1));
        }

        console.log("—----------------------------------------------------------");
    }
}
