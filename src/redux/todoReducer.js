import { TodoType } from "./type";

function sort(todos){
    const completedArr = todos.filter(todo => todo["completed"]).sort((a, b) => a["completedID"] < b["completedID"] ? 1 : -1);
    const noCompletedArr = todos.filter(todo => !todo["completed"])
    const res = [...noCompletedArr, ...completedArr]
    localStorageRefresh(res)
    return res
}
function localStorageRefresh(todos){
    localStorage.setItem("todos", JSON.stringify(todos))
}

const todoSubmit = (state, payload) =>{
        payload.completed = false
        const newArr = [...[payload], ...state]
        return sort(newArr)
}
const todoComplete = (state, payload) => {
    const completedID = Date.now()
    const {id} = payload
    const modArr = state.map(i => i["id"] === id ? {...i, completed: true, completedID} : i )
    const sortedData = sort(modArr)
    return sortedData 
}
const todoDelete = (state, payload) => {
    const filteredArr = state.filter(i => i["id"] !== payload["id"])
    return sort(filteredArr)
}
const todoEnter = (state, payload) => {
    return payload["arr"]
}


const initialState = []
export const todoReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case TodoType.ENTER: return todoEnter(state, payload)
        case TodoType.COMPLETE: return todoComplete(state, payload)
        case TodoType.DELETE: return todoDelete(state, payload)
        case TodoType.SUBMIT: return todoSubmit(state, payload)
        default: return state
    }
} 
