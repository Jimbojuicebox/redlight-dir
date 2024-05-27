import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import DefiPage from "./components/DefiPage";
import GamingPage from "./components/GamingPage";
import ExchangePage from "./components/ExchangePage";
import FaqPage from "./components/FaqPage";
import StakingCalcPage from "./components/StakingCalcPage"


function App() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        
            <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/defi" element={<DefiPage />} />
                    <Route path="/gaming" element={<GamingPage />} />
                    <Route path="/exchange" element={<ExchangePage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/staking" element={<StakingCalcPage />} />
                </Routes>
            </Layout>
        
    )
}

export default App