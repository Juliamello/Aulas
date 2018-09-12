var aluno = { //objeto (JSON)
    name: 'Julia',
    idade:16,
    fala: function(){
        console.log("meu nome eh " + this.name);
        }

function CriaAluno(name, idade) {
    this:name=nome,
    this:idade=idade,
    this:fala = function(){
        console.log('meu nome e ' + this.name);
    }
}

var aluno2 = new CriaAluno('juliana',20);
aluno2.fala();

class CAluno{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
    fala() {
        console.log('meu nome é ' + this.nome);
    }
}

var aluno3 = new CAluno('JULIA3', 16);
aluno3.fala();
