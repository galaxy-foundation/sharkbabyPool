import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import InfoCards, {Item} from "../components/infoCards"
import StakingCards from "../components/stakingCards"
import WithdrawCards from "../components/withdrawCards"

export default function Main() {
  return (
    <div style={{ paddingTop: "5%" }}>
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			spacing={5}
		>
        <Grid item xl={8}>
			<InfoCards />
			<div style={{ height: "15vh" }}></div>
			<StakingCards />
        </Grid>
        <Grid item xl={4}>
			<WithdrawCards />
        </Grid>
      </Grid>
    </div>
  );
}
