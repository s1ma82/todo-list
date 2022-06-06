import { createRoot } from "react-dom/client";
import { configureStore } from '@reduxjs/toolkit'
import TodoPage from "./todo/TodoPage";
import { todoReducer } from "./redux/todoReducer";
import "./style/scrollbar.scss"
import "normalize.css"
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container)
const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

root.render(
    <Provider store = { store }>
        <TodoPage/>
    </Provider>
)