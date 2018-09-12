import {Pessoa} from './pessoa.class.js';

// Usuário é uma Pessoa
export class Artista extends Pessoa {
    constructor(nome) {
        super(nome); // super(nome) == Pessoa(nome)
    }
}
