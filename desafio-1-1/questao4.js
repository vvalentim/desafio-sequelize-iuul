import { Turma } from "./models/Turma.js";

const hardcoded = () => {
    const turma = new Turma();

    turma.inserirAluno("23456", "Bruno Carvalho");
    turma.inserirAluno("45678", "Joao Santos");
    turma.inserirAluno("34567", "Fernanda Abreu");
    turma.inserirAluno("12345", "Ana de Almeida");

    turma.lancarNotaP1("12345", 8.0);
    turma.lancarNotaP2("12345", 9.5);

    turma.lancarNotaP1("23456", 7.0);

    turma.lancarNotaP2("34567", 8.5);

    turma.imprimirBoletim();
};

hardcoded();
