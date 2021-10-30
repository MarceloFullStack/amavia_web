const initialState = {
  toast: false
}

 export default function toastReducer  (state = initialState, { type, ...rest }){
  console.log("ahuhauhuah", state.toast);
  switch (type) {
    case 'rrr':
      return {...state, ...rest }
    default:
      return state
  }
}
