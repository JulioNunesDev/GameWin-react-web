import styled from "styled-components";
import box from '../../assets/box/box.svg'
import fechar from '../../assets/box/fechar.svg'
import cancelar from '../../assets/box/cancelar.svg'
import ok from '../../assets/box/ok.svg'
import songok from '../../songs/bit/uuuii.wav'
import { useRef, useState } from "react";


const BtnContext = styled.div`


width: 360px;
height: 240px;
position: relative;
div{
    h1{
        color: #fafafa;
        font-weight: bolder;
        position: absolute;
        top: 10%;
        left: 50%;
        font-family: var(--font-popis);
        transform: translate(-50%, -40%);
        

    }

    h2{
        color: #fafafa;
        font-weight: bolder;
        position: absolute;
        font-family: var(--font-popis);
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
       

    }
    .box{
       
    }
    .x{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
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

const BtnOp = () => {

    const [comfirmaModal, ComfirmaModal]=useState(true)
    const confBtn = useRef(null)

    const Confirmar =()=>{
        if(confBtn.current.paused)
        confBtn.current.play()
    }

    return ( 
        <BtnContext>
            <div style={comfirmaModal ? {display: 'block'} : {display: 'none'}}>
                <h1>GameWin</h1>
                <h2>Deseja Confirmar?</h2>
                <img className="x" src={fechar} alt="" />
                <img className="fechar" src={cancelar} alt="" />
                <img className="ok" onClick={Confirmar} src={ok} alt="" />
                <img className="box" src={box} alt="" />
                <audio ref={confBtn} src={songok}></audio>
            </div>

        </BtnContext>
     );
}
 
export default BtnOp;