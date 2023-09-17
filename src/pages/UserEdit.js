import UserEditContainer from 'components/UserEdit/UserEditContainer/UserEditContainer'
import UserEditForm from 'components/UserEdit/UserEditForm/UserEditForm'
import PersonaLayout from 'layouts/PersonaLayout/PersonaLayout'
import React from 'react'

const UserEdit = () => {

    return (
        <>
            <PersonaLayout>
                <UserEditContainer>
                    <UserEditForm />
                </UserEditContainer>
            </PersonaLayout>
        </>
    )
}

export default UserEdit