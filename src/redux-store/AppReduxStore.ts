import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epic";

const epicMiddleware = createEpicMiddleware();
const appReduxStore = configureStore({
    reducer: rootReducer(),
    middleware: [epicMiddleware]
});
epicMiddleware.run(rootEpic);

export default appReduxStore
