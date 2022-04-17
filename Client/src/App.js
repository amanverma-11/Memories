import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Container } from "@material-ui/core";
import Auth from "./components/Auth/Auth";
const App = () =>{
     
    return(
        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/auth" exact component={<Auth/>}/>
            </Routes>
        </Container>
        </BrowserRouter>
        
    );
}
export default App;