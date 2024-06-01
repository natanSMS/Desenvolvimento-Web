var pix = {
    chavePix: '11987654321',
    valorTransferencia: 200,
    dataTransacao: '20/05/24',
    descricaoPagamento: 'exemplo1',
    pagador: {
        nome: 'Ronaldo',
        documento: '123456789123'
    },
    recebedor: {
        nome: 'Odair',
        documento: '987654321987'
    },
    historicoTransacoes: [
        {
            data: '12/04/24',
            valor: 150,
            descricao: 'exemplo2'
        },
        {
            data: '28/03/24',
            valor: 175.5,
            descricao: 'exemplo3'
        }
    ]
}

console.log(pix)