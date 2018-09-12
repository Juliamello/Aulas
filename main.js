import {Usuario} from './usuario.class.js';
import {Artista} from './artista.class.js';
import {Musica} from './musica.class.js';
import {Spotify} from './spotify.json.js';
import {Playlist} from './playlist.class.js';

// Ṕermitir que usuário adiciona uma musica
// a nova ou existente

const usuario1= new Usuario('Pedro');
const usuario2= new Usuario('Julia');
console.log(usuario1.nome);
console.log(usuario2.nome);

const artista1= new Artista('Chitãozinho e Xororó');
const artista2= new Artista('Shakira e Maluma');
const artista3= new Artista('Yasmin Santos');

const musica1= new Musica('Evidências', 279, artista1);
const musica2= new Musica('Chantaje', 199, artista2);
const musica3= new Musica('Saudade Nivel HARD', 173, artista3);

Spotify.lancar(musica1);
Spotify.lancar(musica2);
Spotify.lancar(musica3);

console.log(Spotify.biblioteca); // Evidências, Chantaje

console.log(usuario1.playlists); // []
console.log(usuario2.playlists); // []

console.log(usuario1.playlists[0] instanceof Playlist);
console.log(usuario1.playlists[0].musicas); // []
console.log(usuario1.playlists[0].musicas.length === 0);
console.log(usuario2.playlists[0].musicas.length === 0);

usuario2.adicionarMusica(musica2);

console.log(usuario2.playlists[0].musicas); // [chantaje]
console.log(usuario2.playlists[0].musicas.length == 1);

usuario1.adicionarMusica(musica1, 'Sofrência');
usuario1.adicionarMusica(musica3, 'Sofrência');

console.log(usuario1.playlists); // ['Minhas musicas', 'Sofrência']
console.log(usuario1.playlists[1].musicas);

usuario2.adicionarMusica(musica2, 'Musica Boa');
console.log(usuario2.playlists);

console.log(Spotify.playlists); // 'Sofrencia, Musica Boa'

let p = Spotify.playlists[0];
console.log(p.nome); // Sofrência
console.log(p.musicas); // Ok
// De quem é essa playlist ?
console.log(p.usuario); // Pedro


