// Objetos literais em Javascript

// var pessoas = ['fulano', 10, 'Rua XPTO', 30, 'Analistas', 'Maria']
// var pessoa2 = new Object()

var pessoa = {
    nome: 'Fulano',
    idade: 30,
    endereco: 'Rua XPTO',
    numeroCasa: 30,
    cargo: 'Analista',
    conjuge: 'Maria',
    ehMaiorIdade: true,
    telefone: ["11945184526", "11945821560", "45458264570"],
    filhos: [
        {
            nome: 'Joaozinho',
            idade: 10
        },
        {
            nome: 'Luizinha',
            idade: 5
        }
    ]
}

console.log(pessoa)