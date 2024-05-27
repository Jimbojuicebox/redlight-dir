import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import { RedlightChain } from "@thirdweb-dev/chains";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import "./index.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider supportedWallets={[metamaskWallet()]} activeChain={ RedlightChain }>
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
