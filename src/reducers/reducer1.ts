export {}


const ACTION = "ACTION"

type actionACType = ReturnType<typeof actionAC>

const actionAC = () => ({
  type: ACTION
} as const)


type initialStateType = {}

const initialState: initialStateType = {}


const reducer1 = (state: initialStateType, action: actionACType) => {

  switch (action.type) {
    case ACTION:
      return state

    default:
      return state
  }

}