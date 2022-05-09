import { Base } from "./StyHeader";
import {IoSettingsOutline} from 'react-icons/io5'
import esmeralda from '../../../assets/sprites/esmeralda.svg'
import barraGold from '../../../assets/sprites/barraGold.svg'
import moeda from '../../../assets/sprites/moeda.svg'
import useBank from "../../../hooks/useBank";


export default function Header() {
  const {goldCount, moedaCount, esmeraldaCount} = useBank()
  return (
    <Base>
      <div className="itens">
        <div className="Moedas">
        <img className="esmeralda" src={esmeralda} alt="Logo Esmeralda" />
        <span className="esmeraldaSpan">{esmeraldaCount}M</span>

        <img className="gold" src={barraGold} alt="Logo Gold" />
        <span className="goldSpan">{goldCount}M</span>

        <img className="moeda" src={moeda} alt="Logo Moeda" />
        <span className="moedaSpan">{moedaCount}M</span>

        </div>
        <button><IoSettingsOutline /></button>
        </div>
    </Base>
  )
}
