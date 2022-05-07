import styled from 'styled-components'
import BtnOp from '../buttons/BtnOp';
import MenuHeader from '../menu/MenuHeader';
import Ask from './TelaAsk';

const BoxContent = styled.div`
width: 100%;
height: 100vh;
background-color: #111;


`


const Tela01 = () => {
    return ( 
        <BoxContent>
          <MenuHeader />
          <Ask />
        </BoxContent>
     );
}
 
export default Tela01;