import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Loading from "./loading";

const Main = lazy(() => import("./pages/main"));

function App() {
    return (
        <BrowserRouter>
            {/* <Header></Header> */}
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" component={Main} exact></Route>
                    <Route render={({ location }) => <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>}></Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
