import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
    gox: ReactNode
}

const fadeIn = keyframes`

from{opacity: 0}
to{
opacity: 1;
}

`
export const BaseModal = styled.div`
width: 100%;
height:100vh;
background-color: rgba(0,0,0,0.8);
position: absolute;
z-index: 20;
top: 0;
left: 0;
display: ${(props: IProps)=>props.gox ? 'none' : 'block'};
animation:  ${fadeIn} 0.2s ease-in-out ;
transition: 0.3s ease-out;


.status{
    position: relative;
    

    button{
        position: relative;
        top: 25px;
        right: 25px;
        position: absolute;
        font-family: var(--font-mont);
        background: 0;
        cursor: pointer;
        font-size: 22px;
        z-index: 21;
        padding: 10px 25px;
        border: 2px solid white;
        border-radius: 10px;
        color: white;
        text-transform: uppercase;
    }

    .status-infos{
        display: flex;
        position: relative;
        top: 35px;
        width: 100%;
        height: 700px;
        

        ul{
            background-color:  aliceblue ;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 50px;
            width: 400px;
            height: 100%;
            font-family: var(--font-secular);
            
            h1{
                font-size:40px;
                color: #000000;
            }

            div{
                display: flex;
                align-items: center;
                gap: 15px;
                font-family: var(--font-secular);
                font-weight: bolder;
                
                
               

                p{
                    font-size: 20px;
                    padding: 10px 15px;
                    border-radius: 55px;
                    background-color: var(--color-primary);
                    color: #fff;
                    cursor: pointer;
                }

               
            }
            &:nth-child(1){ 
                    font-size: 25px;
               
                }
           

        }
        
    }
    .users{
        display: flex;
        flex-direction: column;
        gap: 50px;
        width: 100%;
        justify-content: center;
        align-items: center;
        h1{
            color: aliceblue;
            font-family: var(--font-secular);
        }
        li{
            text-align: center;
            display: flex;
        }
        li strong{
            color: aliceblue;
            margin-top: 5px;
           
        }
        
    }
}
`