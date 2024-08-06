interface IExpress{
    login:boolean
}

const express = {
  login: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("express");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("express", JSON.stringify(express));
};

export const changeLocalStorage = (express: IExpress):void => {
    localStorage.setItem('express', JSON.stringify(express))
};
