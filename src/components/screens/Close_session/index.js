import React ,{useContext} from 'react'
import {AccountContext} from '../../../context/accountContext'

const CloseSession = () => {
    const { closeSession } = useContext(AccountContext)
    closeSession();
    return <></>
}

export default CloseSession