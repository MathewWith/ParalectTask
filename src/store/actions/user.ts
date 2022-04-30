import axios from "axios";
import { UserActionTypes } from "src/types/UserTypes";

export const getUser = (userName: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    dispatch({ type: UserActionTypes.GET_USER, payload: response.data });
  };
};
