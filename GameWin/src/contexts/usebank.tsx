import React, { createContext, ReactNode, useEffect, useState } from "react";
import ModalMenu from "../shared/components/ModalMenu/ModalMenu";

interface IPropsBank {
  esmeraldaCount: number;
  goldCount: number;
  moedaCount: number;
  btnModal: boolean;
  modalClose: () => void;
}

type UserContextProps = {
  children: ReactNode;
};

export const Bank = createContext({} as IPropsBank);

export const AppBankProvider = ({ children }: UserContextProps) => {
  const [goldCount, setGoldCount] = useState(0);
  const [esmeraldaCount, setEsmeraldaCount] = useState(0);
  const [moedaCount, setMoedaCount] = useState(0);
  const [btnModal, setBtnModal] = useState(true);

  function modalClose() {
    setBtnModal(!btnModal);
  }

  return (
    <Bank.Provider
      value={{ goldCount, esmeraldaCount, moedaCount, btnModal, modalClose }}
    >
      {children}
    </Bank.Provider>
  );
};
