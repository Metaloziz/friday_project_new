export {}


const ACTION = "ACTION"

export type actionACType = ReturnType<typeof actionAC>

export const actionAC = () => ({
  type: ACTION
} as const)


type initialStateType = {}

const initialState: initialStateType = {}


export const login_reducer = (state: initialStateType, action: actionACType) => {

  switch (action.type) {
    case ACTION:
      return state

    default:
      return state
  }

}