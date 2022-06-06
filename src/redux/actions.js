import {TodoType} from './type'
export const todo = {
    complete: obj => ({type: TodoType.COMPLETE, payload: obj}),
    delete: obj => ({type: TodoType.DELETE, payload: obj}),
    enter: obj => ({type: TodoType.ENTER, payload: obj}),
    submit: obj => ({type: TodoType.SUBMIT, payload: obj})
}