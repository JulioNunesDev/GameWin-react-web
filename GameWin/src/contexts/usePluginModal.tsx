import {
  createContext,
  ReactNode,
  ReactPropTypes,
  useEffect,
  useState,
} from "react";

interface IPropsPlugin {
  openModalPlugin?: boolean;
  setOpenModalPlugin: any;
}

type PluginContextProps = {
  children: ReactNode;
};

export const usePlContext = createContext({} as IPropsPlugin);

export const AppPluginProvider = ({ children }: PluginContextProps) => {
  const [openModalPlugin, setOpenModalPlugin] = useState(true);

  return (
    <usePlContext.Provider value={{ openModalPlugin, setOpenModalPlugin }}>
      {children}
    </usePlContext.Provider>
  );
};
