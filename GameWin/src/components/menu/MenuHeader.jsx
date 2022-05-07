import { useState } from 'react';
import styled from 'styled-components'
import menu from '../../assets/box/menu.svg'
import diamond from '../../assets/box/diamond.svg'
import gold from '../../assets/box/gold.svg'
import moeda from '../../assets/box/moeda.svg'



import BtnMenu from '../buttons/BtnMenu';

const ContextMenu = styled.header`
width: 100%;
height: auto;
position: relative;
h1{
    z-index: 100;
    color: #fafafa;
    position: absolute;
    top: 15%;
    right: 15%;
    cursor: pointer;
    
}
img{
    width: 80%;
    height: 100%;
}

div{
    position: absolute;
    top: 25%;
    right: 5%;
}
.diamond{
    top: 20%;
    left: 15%;
    width: 10%;
    height: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    
    h2{
        color: #f47d6d;
    }
    img{
        margin-right: -15px;
    }
}

.gold{
    top: 20%;
    left: 25%;
    width: 10%;
    height: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    
    h2{
        color: #FFC24B;
    }
    img{
        margin-right: -15px;
    }
}

.moeda{
    top: 20%;
    left: 35%;
    width: 10%;
    height: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    
    h2{
        color: #FFC24B;
    }
    img{
        margin-right: -15px;
    }
}

`


const MenuHeader = () => {
    const [menuModal,setMenuModal]=useState(false)
    const ModalMenu=()=>{
        setMenuModal(!menuModal)
    }
    return ( 
        <ContextMenu>
            <h1 onClick={ModalMenu}>Menu</h1>
            <div className="diamond">
            <img  src={diamond} alt="" />
            <h2>1k</h2>
            </div>
            <div className="gold">
            <img  src={gold} alt="" />
            <h2>5k</h2>
            </div>
            <div className="moeda">
            <img  src={moeda} alt="" />
            <h2>510k</h2>
            </div>
            <img src={menu} alt="header" />
            <div style={menuModal ? {display: 'block'} : {display: 'none'}}><BtnMenu /></div>
        </ContextMenu>
     );
}
 
export default MenuHeader;