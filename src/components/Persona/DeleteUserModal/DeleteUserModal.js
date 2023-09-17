import React from 'react'
import styles from 'components/Persona/DeleteUserModal/deleteusermodal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { delUsermodal } from 'redux/features/userDeleteSlice'
import { useUserData } from 'hooks/useUserData'
import { useDelUserData } from 'hooks/useUsersData'

const DeleteUserModal = () => {

    const dispatch = useDispatch()
    const selDelUserModal = useSelector((state) => state.delete.delUserModalState)
    const selDelUserId = useSelector((state) => state.delete.delUserId)
    const deleteUser = useDelUserData()
    const { data } = useUserData(selDelUserId)

    const stopClick = (e) => {
        e.stopPropagation();
    }

    const delUser = () => {
        deleteUser.mutateAsync(selDelUserId)
        dispatch(delUsermodal())
    }

    return (
        <>
            {selDelUserModal ? <div onClick={() => dispatch(delUsermodal())} className={styles.overlay}>
                <div onClick={(e) => stopClick(e)} className={styles["modal-bg"]}>
                    <div className={styles['modal-head']}>
                        <h3>İstifadəçini sil</h3>
                        <span>{`${data?.data.name}`} istifadəçisini silməyə əminsinizmi?</span>
                    </div>
                    <div className={styles['delete-modal-container']}>
                        <button onClick={() => dispatch(delUsermodal())}>İmtina</button>
                        <button onClick={() => delUser()}>İstifadəçini sil</button>
                    </div>
                </div>
            </div> : ''}
        </>
    )
}

export default DeleteUserModal