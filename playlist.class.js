import {Spotify} from './spotify.json.js';

export class Playlist {
    constructor(nome, usuario, musica) {
        this.nome = nome;
        this.usuario=usuario;
        this.musicas= [];
        if (musica) this.adicionar(musica);
        if (nome!=='Minhas Músicas') {
            Spotify.adicionaPlaylist(this);
        }
    }
    toString() {
        return this.nome;
        // ${this.nome} ${this.musicas.length} música(s);
    }
    adicionarMusica(musica) {
        // TODO: if (jáExiste) ...
        this.musicas.push(musica);
    }
}
