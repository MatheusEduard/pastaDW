import {soma} from './calculadora'
import {subtracao} from './calculadora'
import {divisao} from './calculadora'
import {multiplicacao} from './calculadora'


it('Soma de 2 e 2 deve ser 4',() =>{
    expect(soma(2,4)).toBe(6)
})
it('Soma de um numeros positivos e negativos(-2 + 4 = 2)',() =>{
    expect(soma(-2,4)).toBe(2)
})

it('Subtração de 4 e 2 deve ser 2',() =>{
    expect(subtracao(4,2)).toBe(2)
})

it('Multiplicação de 4 e 2 deve ser 8',() =>{
    expect(multiplicacao(4,2)).toBe(8)
})

it('Divisão de 8 e 2 deve ser 4',() =>{
    expect(divisao(8,2)).toBe(4)
})