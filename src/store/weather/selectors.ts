import {createSelector} from "@reduxjs/toolkit"
import {RootState} from "store/store"

const globalState = (state: RootState) => state

export const weatherSelectorState = createSelector(globalState, (state) => state.weatherData)