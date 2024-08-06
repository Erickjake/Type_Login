import { soma, multiplica, divida } from './soma'
 
describe('soma', ()=> {
    it('Deve somar os numeros informados',()=>{
        const value = soma(1,2)
        expect(value).toBe(3)
    })
    it('Deve multiplicar os numeros informados',()=> {
        const value = multiplica(2,5)
        expect(value).toBe(10)
    })

    it('Deve dividir os numeros informados', ()=>{
        const value = divida(50,2)
        expect(value).toBe(25)
    })
})