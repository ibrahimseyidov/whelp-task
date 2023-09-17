import { useMutation, useQuery, useQueryClient } from 'react-query';
import fetchUsers from 'api/fetchUsers';
import postUser from 'api/postUser';
import delUser from 'api/delUser';
import updateUser from 'api/updateUser';
import { toast } from 'react-toastify';

export const useUsersData = (onSuccess, onError) => {
    return useQuery(
        'users',
        fetchUsers,
        {
            onSuccess,
            onError,
        })
}

export const useAddUsersData = () => {
    const queryClient = useQueryClient()
    return useMutation(postUser, {
        onSuccess: async (data) => {
            toast.success("istifadəçinin uğurla yaradıldı")
            queryClient.setQueryData('users', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [data.data, ...oldQueryData.data]
                }
            })
        }
    })
}

export const useUpdateUserData = () => {
    const queryClient = useQueryClient()
    return useMutation(updateUser, {
        onSuccess: (data) => {
            toast.success("istifadəçinin məlumatları uğurla yeniləndi")

            queryClient.invalidateQueries('users')
            queryClient.setQueryData('users', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data]
                }
            })
        }
    })
}

export const useDelUserData = () => {
    const queryClient = useQueryClient()
    return useMutation(delUser, {
        onSuccess: () => {
            toast.success("istifadəçi uğurla silindi")
            queryClient.invalidateQueries("users")
        }
    })
}