import {combineReducers} from 'redux'
import { user } from './user'

export const reducer = combineReducers({
    user
}) 

export type RootType = ReturnType<typeof reducer>