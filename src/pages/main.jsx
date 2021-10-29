import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import InfoCards from "../components/infoCards";
import StakingCards from "../components/stakingCards";
import StakeInfo from "../components/stakeinfo";
import {
	getBalance,
	getStakeBalance,
	getAllStakeBalance,
	getRewords,
	getSkakers,
	getAPY,
} from "../components/getData";

export default function Main() {
	const wallet = useWallet();
	const [mystakebalance, setMystakebalance] = useState(0);
	const [mybalance, setMybalance] = useState(0);
	const [allstakebalance, setAllStakeBalance] = useState(0);
	const [rewordBalance, setRewordBalance] = useState([]);
	const [stakeNum, setStakeNum] = useState(0);
	const [apy, setApy] = useState(0);

	useEffect(() => {
		async function checkConnection() {
			if (window.ethereum) {
				const provider = new ethers.providers.Web3Provider(
					window.ethereum
				);
				const accounts = await provider.listAccounts();
				if (accounts.length !== 0) {
					wallet.connect();
				}
			}
			setAllStakeBalance(await getAllStakeBalance());
			setStakeNum(await getSkakers());
			setApy(await getAPY());
		}
		checkConnection();
	}, []);

	useEffect(() => {
		async function getData() {
			if (wallet.status === "connected") {
				try {
					setMybalance(await getBalance(wallet.account));
					setMystakebalance(await getStakeBalance(wallet.account));
					setRewordBalance(await getRewords(wallet.account));
				} catch (err) {
					console.log(err);
				}
			}
		}

		getData();
	}, [wallet.status]);

	return (
		<div style={{ paddingTop: "5%" }}>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={5}>
				<Grid item xl={8}>
					<InfoCards
						allstakebalance={allstakebalance}
						stakeNum={stakeNum}
						apy={apy}
					/>
					<div style={{ height: "5vh" }}></div>
					<StakingCards
						setMystakebalance={setMystakebalance}
						mystakebalance={mystakebalance}
						setMybalance={setMybalance}
						mybalance={mybalance}
						setAllStakeBalance={setAllStakeBalance}
						setRewordBalance={setRewordBalance}
						setStakeNum={setStakeNum}
						setApy={setApy}
					/>
					<br />
					<br />
				</Grid>
				<Grid item xl={4}>
					<StakeInfo
						setAllStakeBalance={setAllStakeBalance}
						setMybalance={setMybalance}
						setMystakebalance={setMystakebalance}
						mystakebalance={mystakebalance}
						setRewordBalance={setRewordBalance}
						rewordBalance={rewordBalance}
						setStakeNum={setStakeNum}
						setApy={setApy}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
