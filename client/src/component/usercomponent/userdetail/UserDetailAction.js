import {fetchIsLoading, fetchUserDetail, fetchError} from './UserDetailSlicer'
import { getUserById } from '../../../api/userApi'


export const getUserDetailAction = (id) => async (dispatch) => {
    dispatch(fetchIsLoading())
    try {
        const user = await getUserById(id) 
        dispatch(fetchUserDetail(user.data))
    } catch (error) {
        dispatch(fetchError(error))
    }
}