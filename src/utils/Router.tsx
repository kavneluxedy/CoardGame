import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound404 from "../pages/404";
import Layout from "../pages/Layout";

type Props = {}

const Router = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<NotFound404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export { Router };