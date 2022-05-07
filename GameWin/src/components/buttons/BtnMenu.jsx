import styled from "styled-components";
import box from '../../assets/box/box.svg'
import fechar from '../../assets/box/fechar.svg'
import cancelar from '../../assets/box/cancelar.svg'
import ok from '../../assets/box/ok.svg'
import { useRef, useState } from "react";


const BtnContext = styled.div`



width: 360px;
height: 240px;
div{
    position: relative;
    h1{
        color: #fafafa;
        font-weight: bolder;
        position: absolute;
        font-size: 25px;
        top: 10%;
        left: 43%;
        font-family: var(--font-popis);
        transform: translate(-40%, -50%);
        

    }
    

    .btn{
        width: auto;
        height: auto;
        font-weight: bolder;
        position: absolute;
        font-size: 30px;
        top: 40%;
        left: 40%;
        font-family: var(--font-popis);
        transform: translate(-40%, -50%);
        display: flex;
        justify-content: space-around;
        align-items: center;
        

        h2{
        color: #FFAE02;
        font-weight: bolder;
        position: absolute;
        font-size: 30px;
        top: 40%;
        left: 30%;
        font-family: var(--font-popis);
        transform: translate(-40%, -50%);
        
        
    }

    button{
        margin-left: 150px;
        border-radius: 50%;
        background-color: #ef8e08;
        border: 0;
        font-family: var(--font-popis);
        font-weight: bolder;
        color: #fafafa;
        cursor: pointer;
        padding: 8px;
        filter:  drop-shadow(2px 2px 2px #FFAE02);
        box-shadow: inset 2px 2px 2px #FFAE02;
    }
    }

  
    .box{
       
    }
    .x{
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        width: 10%;
    }

    .fechar{
        width: 40%;
        position: absolute;
        top: 75%;
        right: 50%;
        cursor: pointer;
    }

    .ok{
        width: 40%;
        position: absolute;
        top: 75%;
        left: 50%;
        cursor: pointer;
    }
}
  
`


import themeMusic from '../../songs/bit/theme.wav'

const BtnMenu = () => {

    const [play, setPlay]=useState(true)

    const btnMusic = useRef(null)
    
    const musicplay=()=>{
        if(btnMusic.current.paused){
            btnMusic.current.play()
            setPlay(false)
        }else{
            setPlay(true)
            btnMusic.current.pause()
        }
    }

    return ( 
        <BtnContext>
            <div >
                <h1>Configurações</h1>
                
               
                <div className="btn">
                <h2>Sound</h2>
                <button onClick={musicplay}>{play ? 'ON' : 'OFF'}</button>
                </div>
                <img className="box" src={box} alt="" />
                <audio autoPlay loop ref={btnMusic} src={themeMusic}  ></audio>
            </div>

        </BtnContext>
     );
}
 
export default BtnMenu;