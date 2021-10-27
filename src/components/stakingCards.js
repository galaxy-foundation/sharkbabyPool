
import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import {useWallet} from 'use-wallet';
import {ethers} from "ethers";
import {
    provider,
    SharkbabyToken,
    StakingTokenPool
} from "../contracts"

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
    color: "white",
    fontSize: "110%",
    fontFamily: "System",
  }));

const StakingCards = ()=>{
	const wallet = useWallet();
	const [amount,setAmount] = useState(0);


    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={20}
          >
            <Grid item>
              <div className="amountpanel">
                <p className = "font-h2" >
                  Please enter the amount of ADAPAD you want to stake
                </p>
                <p>
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
                    <button className="input-group-text">Max</button>
                  </div>
                  <p>
                    Balance:&nbsp;<label>0.000</label>
                  </p>
                </Item>
              </div>
            </Grid>
        </Grid>
    )
}

export default StakingCards;