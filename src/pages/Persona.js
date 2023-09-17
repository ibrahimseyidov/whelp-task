import DeleteUserModal from 'components/Persona/DeleteUserModal/DeleteUserModal'
import NewUserModal from 'components/Persona/NewUserModal/NewUserModal'
import UserBar from 'components/Persona/UserBar/UserBar'
import UserCardsArea from 'components/Persona/UserCardsArea/UserCardsArea'
import UserContainer from 'components/Persona/UserContainer/UserContainer'
import PersonaLayout from 'layouts/PersonaLayout/PersonaLayout'
import React from 'react'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Persona = () => {
    return (
        <>
            <PersonaLayout>
                <UserContainer>
                    <UserBar />
                    <UserCardsArea />
                    <NewUserModal />
                    <DeleteUserModal />
                    <ToastContainer />
                </UserContainer>
            </PersonaLayout>
        </>
    )
}

export default Persona