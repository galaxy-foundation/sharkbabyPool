import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "use-wallet";

export const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	background: "transparent",
	boxShadow: "none",
	color: "white",
	fontSize: "110%",
	fontFamily: "System",
}));

const InfoCards = (props) => {
	const { allstakebalance, stakeNum, apy } = props;
	const wallet = useWallet();

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			spacing={10}>
			<Grid item xl={3} md={4}>
				<Item>
					<div className="panel yellow">
						Total SharkBaby shaked
						<br />
						<br />
						<p>
							{wallet.status === "connected"
								? allstakebalance
								: "0,000,000"}
						</p>
					</div>
				</Item>
			</Grid>
			<Grid item xl={3} md={4}>
				<Item>
					<div className="panel red">
						Number of Stakers
						<br />
						<br />
						<p>{wallet.status === "connected" ? stakeNum : "0"}</p>
					</div>
				</Item>
			</Grid>
			<Grid item xl={3} md={4}>
				<Item>
					<div className="panel blue">
						APY
						<br />
						<br />
						<p>
							{wallet.status === "connected" && apy
								? apy + "%"
								: "0%"}
						</p>
					</div>
				</Item>
			</Grid>
		</Grid>
	);
};

export default InfoCards;
