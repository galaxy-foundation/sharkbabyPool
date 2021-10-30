import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import { SharkbabyToken, StakingTokenPool } from "../contracts";
import {
	getBalance,
	getStakeBalance,
	getAllStakeBalance,
	getRewords,
	getSkakers,
	getAPY,
} from "../components/getData";

export const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	background: "transparent",
	boxShadow: "none",
	color: "white",
	fontSize: "110%",
	fontFamily: "System",
}));

const StakingCards = (props) => {
	const {
		setMystakebalance,
		setMybalance,
		mybalance,
		setAllStakeBalance,
		setRewordBalance,
		setStakeNum,
		setApy,
	} = props;

	const wallet = useWallet();
	const [amount, setAmount] = useState(0);
	const [allMoney, setAllMoney] = useState(0);

	const handleChange = (e) => {
		setAmount(e.target.value);
	};

	const handleStacking = async () => {
		if (wallet.status === "connected") {
			try {
				var stakeAmont = ethers.utils.parseUnits(amount.toString(), 18);
				const provider = new ethers.providers.Web3Provider(
					wallet.ethereum
				);
				const signer = await provider.getSigner();
				var signedSharkbabyToken = SharkbabyToken.connect(signer);

				var tx = await signedSharkbabyToken.approve(
					StakingTokenPool.address,
					stakeAmont
				);
				await tx.wait();

				var signedStakingTokenPool = StakingTokenPool.connect(signer);
				tx = await signedStakingTokenPool.stake(stakeAmont);
				await tx.wait();

				setMybalance(await getBalance(wallet.account));
				setMystakebalance(await getStakeBalance(wallet.account));
				setAllStakeBalance(await getAllStakeBalance());
				setRewordBalance(await getRewords(wallet.account));
				setStakeNum(await getSkakers());
				setApy(await getAPY());
			} catch (err) {
				console.log(err);
			}
		}
	};

	const handleall = async () => {
		wallet.status === "connected" ? setAmount(mybalance) : setAmount(0);
	};

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center">
			<Grid item>
				<div className="amountpanel">
					<h1 className="font-h2">Shake your SHARKBABY</h1>
					<br />
					<Item className="amountinput">
						<div className="input-group">
							<input
								type="number"
								min="0"
								className="form-control"
								placeholder="Enter Amount"
								onChange={handleChange}
								value={amount}
							/>
							<button
								className="input-group-text"
								onClick={handleall}>
								Max
							</button>
						</div>
						<p
							style={{
								float: "right",
							}}>
							<label>Balance:&nbsp;{mybalance}</label>
						</p>
					</Item>
					<button
						onClick={handleStacking}
						className="stackbutton stakeM">
						stack
					</button>
				</div>
			</Grid>
		</Grid>
	);
};

export default StakingCards;
