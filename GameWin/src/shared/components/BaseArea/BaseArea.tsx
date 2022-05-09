import React from 'react'
import Header from '../Header/Header'
import Perguntas from '../perguntas/Perguntas'
import { Base, BaseHeader,BaseMainContent } from './StyBaseArea'

export default function BaseArea() {
  return (
    <Base>
    <BaseHeader>
        <Header />
    </BaseHeader>
    <BaseMainContent>
    <Perguntas />
    </BaseMainContent>
    </Base>
  )
}
