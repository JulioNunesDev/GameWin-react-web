import { useEffect, useState } from "react";
import usePlugin from "../../../hooks/useModalPlugin";
import { BaseModal } from "./StyModalMenu";
import {  FaVolumeUp } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";

export default function ModalMenuPlugin() {
  const { openModalPlugin, setOpenModalPlugin } = usePlugin();

  function modal() {
    setOpenModalPlugin(!openModalPlugin);
  }

  useEffect(() => {
    function modalMenu(event: KeyboardEvent) {
      const PluginMenu = event.key;

      if (PluginMenu.indexOf("Enter") !== -1) {
        console.log(PluginMenu);
        return modal();
      }
    }

    window.addEventListener("keydown", modalMenu);

    return () => {
      window.removeEventListener("keydown", modalMenu);
    };
  }, [modal]);

  return (
    <BaseModal gox={openModalPlugin}>
      <div className="status">
        <button>Enter</button>
        <div className="status-infos">
          <ul>
            <h1>Volume</h1>
        <div>
        <FaVolumeUp /> <p>ON</p>
        </div>  
            
        <div>
        <IoMusicalNotesOutline /> <p>ON</p>
        </div> 

            
          </ul>
          <div className="users">
            <h1>Menu Modal</h1>
            <div style={{backgroundColor: "aliceblue",
             width: '100%', height: 'auto', display: 'flex',justifyContent: 'center', alignContent: 'center',textAlign: 'center'
             }}>
                <h1 style={{color: 'black'}}>Breve....</h1>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
