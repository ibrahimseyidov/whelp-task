import fetchDynamicUser from "api/fetchDynamicUser";
import { useQuery } from "react-query";

export const useUserData = (userId, onSuccess, onError) => {
    return useQuery(['users', userId], () => fetchDynamicUser(userId), {
           refetchOnMount: true,
           onSuccess,
           onError,
    })
}