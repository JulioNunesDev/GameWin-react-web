import { useState } from 'react'
import useBank from '../../../hooks/useBank'
import { BaseModal } from './StyModalStatus'

export default function ModalStatus() {
    
    const {btnModal, modalClose} = useBank()
    
  return (
      <BaseModal play={btnModal}> 
        <div className='status'>
            <button onClick={modalClose}>X</button>
            <div className="status-infos">
                <ul>
                    <h1>Teclas do Jogo</h1>
                    <li><strong> Enter - <span className='effect-orange'>Open Menu</span></strong></li>

                    <li><strong>B - <span className='effect-orange'>Ranking</span></strong></li>
                </ul>
                <div className="users">
                    
                        <h1>Desenvolvedores</h1>
                        <li> <strong className=''>FullStack - JR / <a  className='effect-orange' href="">Julio Nunes</a>
                        <p>Lidertech - Responsável por colocar estruturar o código e auxiliar os demais.</p>
                         </
                        strong>
                         </li>

                        <li> <strong className=''>Front-End / <a  className='effect-orange' href="">Fernando</a> 
                        <p>Design - responsável pelo planejamento, criação e desenvolvimento de produtos e serviços.</p>
                        </strong> </li>
                        <li> <strong className=''>FullStack -JR / <a  className='effect-orange' href="">Arthur</a>
                        <p>Oh, Estágio - O estágio é a primeira experiência de um estudante na sua área de atuação. </p>
                         </strong> </li>
                    
                </div>
            </div>
        </div>
      </BaseModal>
  )
}
