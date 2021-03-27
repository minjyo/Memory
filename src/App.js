import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Loading from "./loading";

const Main = lazy(() => import("./pages/main"));
const AddText = lazy(() => import("./pages/addText"));
const AddPicture = lazy(() => import("./pages/addPicture"));
const Result = lazy(() => import("./pages/result"));
const Example = lazy(() => import("./pages/example"));

function App() {
    return (
        <BrowserRouter>
            {/* <Header></Header> */}
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" component={Main} exact></Route>
                    <Route path="/AddText" component={AddText} exact></Route>
                    <Route path="/AddPicture" component={AddPicture} exact></Route>
                    <Route path="/Result" component={Result} exact></Route>
                    <Route path="/ex" component={Example} exact></Route>
                    <Route render={({ location }) => <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>}></Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
