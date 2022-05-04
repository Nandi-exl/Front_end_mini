import {fetchIsLoading, fetchRegisterUser, fetchError} from './registerUserSlicer'
import { register } from '../../../api/userApi';

export const registerUserAction = (frmdata, next) => async (dispatch) => {
    dispatch(fetchIsLoading());
    try{
        const result = await register(frmdata)
        dispatch(fetchRegisterUser(result.data))
        next()
    }catch (error) {
        dispatch(fetchError())
    }
}