import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import DataReducer from "./Datos"; 
import FileReducer from "./Files";

const rootReducer = combineReducers({
    core: DataReducer,
    uploader: FileReducer,
});

export default function generateStore(){
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}