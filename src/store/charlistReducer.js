// import CHANGE_FIELD from "./actionCreators/CHANGE_FIELD";
//
// const filling = (len, startValue, str) => {
//     let array = Array(len).fill(startValue);
//     for (let i = 0; i < array.length; i++) {
//         if (localStorage.getItem(str + i) !== null) {
//             array[i] = localStorage.getItem(str + i);
//         }
//     }
//     return array;
// }
//
// const initialState = {
//     charName: "",
//     harks: filling(6, 0, "harks")
// };
//
// function actionChangeField(action, state) {
//     const newStateValue = state[action.payload.name].slice(0)
//     newStateValue[action.payload.index] = action.payload.value
//     for (let i = 0; i < newStateValue.length; i++) {
//         localStorage.setItem(action.payload.name + i, newStateValue[i]);
//     }
//     const newState = {...state}
//     newState[action.payload.name] = newStateValue
//     return newState;
// }
//
// function actionChangeArray(action, state) {
//     const newStateValue = action.payload.value
//     for (let i = 0; i < newStateValue.length; i++) {
//         localStorage.setItem(action.payload.name + i, newStateValue[i]);
//     }
//     const newState = {...state}
//     newState[action.payload.name] = newStateValue
//     return newState;
// }
//
// export const charlistReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CHANGE_FIELD:
//             return actionChangeField(action, state);
//         case "CHANGE_ARRAY":
//             return actionChangeArray(action, state);
//         case "CHANGE_NAME":
//             return {...state, charName: action.payload.name}
//         default:
//             return state;
//     }
// }
