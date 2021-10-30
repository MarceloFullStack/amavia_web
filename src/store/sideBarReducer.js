const initialState = {
  sidebarShow: 'responsive'
}

 export default function sideBarReducer  (state = initialState, { type, ...rest }){
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}
