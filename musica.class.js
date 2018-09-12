export class Musica {
    constructor(titulo, duracao, artista) {
        this.titulo=titulo;
        if (duracao<0) {
            throw new Error('Duração deve ser posotiva');
        }
        this.duracao=duracao;
        this.artista=artista;
    }
}
