import styled from "styled-components";
import headerLogo from '../../../assets/base/header.svg'

export const Base = styled.div`
width: 640px;
height: 75px;
background-image: url(${headerLogo});
background-repeat: no-repeat;
background-position: center;
background-position-y: center;


.itens{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
   
    
    button{
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        cursor: cell;
        color: #fff;
        
        
        &{
            font-size: 35px;
        }   
    }
    .Moedas{
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;

            .goldSpan{
                margin-left: 7px;
                margin-right: 10px;
                color: #FFC24B;
            }
            .esmeraldaSpan{
                margin-left: -3px;
                color: #E43E8E;
                margin-right: 12px;
            }
            .moedaSpan{
                margin-left: 2px;
                color: #FFC24B;
            }
            span{
                font-family: var(--font-mont);
                font-weight: bolder;
                cursor: no-drop;
            }
        }
    .esmeralda{ 
        width: 45px;
        height: 35px;
        object-fit: contain;
    }
    .gold{ 
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
    .moeda{ 
        width: 45px;
        height: 40px;
        object-fit: contain;
    }

}
`