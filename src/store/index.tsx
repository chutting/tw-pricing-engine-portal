import { createContext, useContext, useReducer } from 'react'
import reducer, { IState } from './reducer'
import { Action } from './action'

export const initState: IState = {}

const StateContext = createContext(initState)
const DispatchContext = createContext((() => 0) as React.Dispatch<Action>)

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useGlobalDispatch = () => useContext(DispatchContext)

export const useGlobalState = () => useContext(StateContext)
