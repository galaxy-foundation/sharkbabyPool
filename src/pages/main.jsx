import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import stackedIMG from "../components/assets/img/stakedbackground.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  background: "transparent",
  boxShadow: "none",
  color: "white",
  fontSize: "110%",
  fontFamily: "System",
}));

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
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <Grid item xl={3}>
              <div className="panel">
                <br />
                <Item>Total SharkBaby shaked</Item>
              </div>
            </Grid>
            <Grid item xl={3}>
              <div className="panel">
                <br />
                <Item>Number of Stakers</Item>
              </div>
            </Grid>
            <Grid item xl={3}>
              <div className="panel">
                <br />
                <Item>APY</Item>
              </div>
            </Grid>
          </Grid>
          <div style={{ height: "15vh" }}></div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={20}
          >
            <Grid item>
              <div className="amountpanel">
                <p
                  style={{
                    fontSize: "130%",
                    padding: "10px",
                    color: "white",
                    fontFamily: "Comic Sans MS",
                  }}
                >
                  Please enter the amount of ADAPAD you want to stake
                </p>
                <p
                  style={{
                    fontFamily: "Comic Sans MS",
                    fontSize: "100%",
                    color: "white",
                    paddingLeft: "10px",
                  }}
                >
                  Any ADA rewards already accumulated will be automatically paid
                  out when staking ADAPAD
                  <br />
                  Any fees applied at Unstake & Withdraw stage will be based on
                  the date you last staked.
                </p>
                <br />
                <Item className="amountinput">
                  <label>Amount</label>
                  <div className="input-group">
                    <input type="number" min="0" className="form-control" />
                    <span className="input-group-text">Max</span>
                  </div>
                  <p>
                    Balance:&nbsp;<label>0.000</label>
                  </p>
                </Item>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4}>
          <div
            className="stakedpanel noselect"
            style={{
              background: `url(${stackedIMG})`,
              backgroundSize: "100% 100%",
            }}
          >
            <Item>
              <br />
              <p>Stacked</p>
              <label className="stakedtitle">0.0000</label>
              <p>Reward (ADA)</p>
              <label className="stakedtitle">0.000000</label>
              <br />
              <br />
              <br />
              <button className="stackedbutton">Withdraw</button>
              <br />
              <br />
              <button className="stackedbutton">+ Add To Metamask</button>
            </Item>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
