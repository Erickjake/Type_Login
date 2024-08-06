

const conta = {
    email: 'erick@loginExpress.com',
    password: '12314',
    name: 'Erickson Costa',
    balance: 2000,
    id: '1'
}

export const api = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(conta)
    }, 3000)
})