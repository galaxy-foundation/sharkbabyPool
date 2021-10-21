import React from "react";
import Routes from "./router/index";
import { UseWalletProvider } from "use-wallet";

function App() {
  return (
    <UseWalletProvider
      chainId={2021}
      connectors={{
        // This is how connectors get configured
        portis: { dAppId: "shark-app-id-123-xyz" },
      }}
    >
    <Routes />
    </UseWalletProvider> 
  );
}

export default App;
