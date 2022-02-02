import React, { useState } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import Auth from './routes/Auth'

const Routers = ({loginstate}) => {
    return (
        <HashRouter>
            <Routes>
                {loginstate ? (
                <><Route path="/" exact element={<Home />}></Route></> ) : (
                <><Route path="/" exact element={<Auth />}></Route></>
            )}
            </Routes>
        </HashRouter>
    )
}

export default Routers