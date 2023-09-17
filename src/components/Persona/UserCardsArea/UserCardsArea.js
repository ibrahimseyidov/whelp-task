import React from 'react'
import UserCardsContainer from 'components/Persona/UserCardsContainer/UserCardsContainer'
import UserCard from 'components/Persona/UserCard/UserCard';
import { useUsersData } from 'hooks/useUsersData';
import { useSelector } from 'react-redux';
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const UserCardsArea = () => {

    const selSearchVal = useSelector((state) => state.search.searchVal)

    const onSuccess = (data) => {
        console.log('İstifadəçilər uğurla yüklənildi!', data);
    }

    const onError = (error) => {
        console.log('Gözlənilməyən xəta baş verdi!', error);
    }

    const { isLoading, data, isError, error } = useUsersData(onSuccess, onError)

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const override = {
        display: "block",
        margin: "200px auto 0 auto",
        borderColor: "#4D2DB7",
    };

    if (isLoading) {
        return <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    }

    if (isError) {
        return <span>{error.message}</span>
    }

    const filteredUsers = data?.data.filter((item) =>
        item.name.toLowerCase().includes(selSearchVal.toLowerCase())
    );

    return (
        <>
            <UserCardsContainer>
                {
                    filteredUsers.map((user) => (
                        user && (<UserCard key={user.id} {...user} />)
                    ))
                }
            </UserCardsContainer>
        </>
    )
}

export default UserCardsArea