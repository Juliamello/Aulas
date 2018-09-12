import {Pessoa} from './pessoa.class.js';
import {Playlist} from './playlist.class.js';
// Usuário é uma Pessoa
export class Usuario extends Pessoa {
    constructor(nome) {
        super(nome); // super(nome)==Pessoa(nome)
        this.playlists = [];
        this.playlists.push(new Playlist('Minhas Músicas', this));
    }
    adicionarMusica(musica, nomePlaylist) {
        if (nomePlaylist) {
            for (const pl of this.playlists) {
                if (pl.nome===nomePlaylist) {
                    pl.adicionar(musica);
                    return;
                }
            }
            this.playlists.push(new Playlist(nomePlaylist, this, musica));
        } else {
            this.playlists[0].adicionar(musica);
        }
        // this.playlists[0].adicionar(musica);
        // .musicas.push(musica);
    }
}
