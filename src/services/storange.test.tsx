import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storange";

const express = {
    login: false
}

describe('storage', ()=> {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')


    it('Deve retorna o obejeto no localStorage', ()=>{
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('express')
    })

    it('Deve criar o obejeto no localStorage', ()=>{
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('express', JSON.stringify(express))
    })

    it('Deve Alterar o valor do objeto no localStorage', ()=>{
        changeLocalStorage(express)
        expect(mockSetItem).toHaveBeenCalledWith('express',JSON.stringify(express))
    })
})