import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import { StakingTokenPool } from "../contracts";
import {
	getBalance,
	getStakeBalance,
	getAllStakeBalance,
	getRewords,
	getSkakers,
	getAPY
} from "../components/getData";

import symbol from "./assets/img/symbol4.png";

export const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	background: "transparent",
	boxShadow: "none",
	color: "white",
	fontSize: "110%",
	fontFamily: "System",
}));

const StakeInfo = (props) => {
	const {
		setAllStakeBalance,
		setMybalance,
		setMystakebalance,
		mystakebalance,
		rewordBalance,
		setRewordBalance,
		setStakeNum,
		setApy,
	} = props;

	const wallet = useWallet();

	const handleWithdrawing = async () => {
		if (wallet.status === "connected") {
			try {
				const provider = new ethers.providers.Web3Provider(
					wallet.ethereum
				);
				const signer = await provider.getSigner();

				var signedStakingTokenPool = StakingTokenPool.connect(signer);
				var tx = await signedStakingTokenPool.unstaking();
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

	const handleClaimReward = async () => {
		if (wallet.status === "connected") {
			try {
				const provider = new ethers.providers.Web3Provider(
					wallet.ethereum
				);
				const signer = await provider.getSigner();

				var signedStakingTokenPool = StakingTokenPool.connect(signer);
				var tx = await signedStakingTokenPool.claimRewards();
				await tx.wait();
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div className="stakedpanel noselect">
			<img src={symbol} alt="NoImg" className="stakepanelmark" />
			<Item>
				<br />
				<p>Stacked</p>
				<label className="stakedtitle">
					{wallet.status === "connected" ? mystakebalance : "0.00000"}
				</label>
				<p>Reward (AutoShark)</p>
				<label className="stakedtitle">
					{wallet.status === "connected"
						? rewordBalance[0]
						: "0.0000"}
				</label>
				<br />
				<p>Reward (Babyswap)</p>
				<label className="stakedtitle">
					{wallet.status === "connected"
						? rewordBalance[1]
						: "0.0000"}
				</label>
				<br />
				<br />
				<button
					className="stackedbutton add"
					onClick={handleClaimReward}>
					ClaimReward
				</button>
				<br />
				<br />
				<button
					className="stackedbutton withdraw"
					onClick={handleWithdrawing}>
					Withdraw
				</button>
			</Item>
		</div>
	);
};

export default StakeInfo;
