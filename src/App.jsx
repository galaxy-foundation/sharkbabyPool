import React from "react";
import Routes from "./router/index";
import { UseWalletProvider } from "use-wallet";
import "./App.css";

function App() {
	return (
		<UseWalletProvider
			chainId={4002}
			connectors={{
				// This is how connectors get configured
				portis: { dAppId: "sharkbaby" },
			}}>
			<Routes />
		</UseWalletProvider>
	);
}

export default App;
