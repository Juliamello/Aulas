import { Usuario } from "./usuario.class";

export const Spotify = {
    biblioteca: [],
    lancar: function(musica) {
        this.biblioteca.push(musica);
    },
    playlists: [],
    adicionaPlaylist: function(playlist) {
        this.playlists.push(playlist);
    },
    usuarios: [],
    registrar: function(nomeUsuario) {
        const usuario = new Usuario(nomeUsuario);
        this.usuarios.push(usuario);
        return usuario;
    }
};
