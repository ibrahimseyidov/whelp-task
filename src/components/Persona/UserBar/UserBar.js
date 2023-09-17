import React from 'react'
import styles from 'components/Persona/UserBar/userbar.module.css'
import { useDispatch } from 'react-redux'
import { setUserModal } from 'redux/features/createUserSlice'
import { setSearchVal } from 'redux/features/searchSlice'

const UserBar = () => {
    const dispatch = useDispatch()

    return (
        <>
            <div className={styles['userbar-container']}>
                <div className={styles['users']}>
                    <h2>İstifadəçilər</h2>
                </div>
                <div className={styles['search-area']}>
                    <input onChange={(e) => dispatch(setSearchVal(e.target.value))} type="text" placeholder='Axtar...' />
                    <button onClick={() => dispatch(setUserModal())} className={styles['create-btn']}>YARAT</button>
                </div>
            </div>
        </>
    )
}

export default UserBar