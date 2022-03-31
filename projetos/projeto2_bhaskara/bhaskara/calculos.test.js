import { delta } from './calculos'
import {bhaskara} from './calculos'

it('Delta de 2, 8 , -24 tem que ser 256',() =>{
    expect(delta(2,8,-24)).toBe(256)
})

it('Bhaskara de a = 2, b = 8 e delta = 256 tem que ser x1 = 2 e x2 = -6',() =>{
    expect(bhaskara(2,8,delta(2,8,-24))).toMatchObject({x1:2, x2:-6})
})

it('Bhaskara de a = 2, b = 4 e delta = 0 tem que ser x1 = -1 e x2 = Valor Inexistente',() =>{
    expect(bhaskara(2,4,delta(2,4,2))).toMatchObject({x1:-1, x2:'Valor Inexistente'})
})

it('Bhaskara de a = 2, b = 2 e delta = -12 tem que ser x1 = Valor Inexistente e x2 = Valor Inexistente',() =>{
    expect(bhaskara(2,2,delta(2,2,2))).toMatchObject({x1:'Valor Inexistente', x2:'Valor Inexistente'})
})