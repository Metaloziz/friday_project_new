import {combineReducers} from "redux"

import {login_reducer} from "../reducers/login_reducer"


const root_reducer = combineReducers({
  lofinPage: login_reducer
})