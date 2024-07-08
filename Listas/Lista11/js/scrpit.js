let inputValorBruto = document.getElementById('valor-bruto')
let inputValorLiquido = document.getElementById('valor-liquido')
let botao = document.getElementById('btn-calcular')
let taxa = document.getElementById('valor-taxa')

botao.addEventListener('click', () => {
    taxa.value = Number(inputValorBruto.value) * 15 /100
    taxa.textContent = taxa.value
    inputValorLiquido.value = Number(inputValorBruto.value) - Number(taxa.value)
    inputValorLiquido.textContent = inputValorLiquido.value
})

botao.addEventListener('mouseover', () => {
    botao.classList.add('anima-botao')
})

botao.addEventListener('mouseleave', () => {
    botao.classList.remove('anima-botao')
})