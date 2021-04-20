import React, {useState} from 'react'
import NavBar from '../navbar/index'

import Sidebar from '../Sidebar'
import {CorpoContainer,CorpoContent,CorpoItems,CorpoH1,CorpoP,CorpoBtn} from './corpoElements'




const Corpo = () => {
    const[isOpen,setIsOpen] = useState(false)
        const toggle = () => {
            setIsOpen(!isOpen)
    }

    return (
        <div>
            <CorpoContainer>
                <NavBar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <CorpoContent>
                    <CorpoItems>
                        <CorpoH1>Só as melhores pizzas</CorpoH1>
                        <CorpoP>Entregues em 60 minutos</CorpoP>
                        <CorpoBtn>Peça já</CorpoBtn>
                    </CorpoItems>
                </CorpoContent>
            </CorpoContainer>
        </div>
    )
}

export default Corpo
