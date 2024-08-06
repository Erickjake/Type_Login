
import { login } from './login'

const mockSetIsLoggedIn = jest.fn()

jest.mock('react',()=>({
    ...jest.requireActual('react'),
    useContext: ()=>({
        setIsLoggedIn: mockSetIsLoggedIn})
    }))
describe('login',()=>{

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'erick@loginExpress.com'
    const mockPassword = '12314'

    it('Deve retorna uma mensagem',async() => {
        await login(mockEmail,mockPassword)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })

    it('Não deve receber a mensagem de boas vindas sem o email',async()=>{
        await login(mockEmail,mockPassword)
        expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith()
        expect(mockAlert).not.toHaveBeenCalledWith('Não inserido o email correto ou a senha Correta')
    })

    it('Deve exibir um erro caso seja invalido',async ()=>{
        await login('email@invalido','Senha Invalida')
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith()
        expect(mockAlert).toHaveBeenCalledWith('Email ou Senha invalida')
    })
})