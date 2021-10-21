import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import logo from "../components/assets/img/logo.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  background: "transparent",
  boxShadow: "none",
}));

export default function Header() {
  const [mobileView, setMobileView] = useState(false);
  const [drowdownFlag, setDrowdownFlag] = useState(false);
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  });

  function mobileMenuButton() {
    drowdownFlag ? setDrowdownFlag(false) : setDrowdownFlag(true);
  }

  return (
    <div style={{ background: "rgb(10, 77, 170)" }}>
      {!mobileView ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columns={14}
          spacing={5}
        >
          <Grid item xl={3} lg={3} md={3} sm={12}>
            <Item>
              <img src={logo} className="logo-img noselect" alt="NoImg" />
            </Item>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Item>
              <Link to="" className="menubutton noselect">
                Staking
              </Link>
            </Item>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Item>
              <Link to="" className="menubutton noselect">
                Unstaking
              </Link>
            </Item>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Item>
              <Link to="" className="menubutton noselect">
                Launchpad
              </Link>
            </Item>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Item>
              <Link to="" className="menubutton noselect">
                Website
              </Link>
            </Item>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Item>
              <button className="connectbutton noselect">Connect Wallet</button>
            </Item>
          </Grid>
        </Grid>
      ) : (
        <Grid
          contanier
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} sx={12}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item sm={2} xs={2}>
                <img
                  src={logo}
                  className="mobile-logo-img noselect"
                  alt="NoImg"
                />
              </Grid>
              <Grid item sm={8} xs={8}></Grid>
              <Grid item sm={2} xs={2} onClick={mobileMenuButton}>
                <div className="mobile-container">
                  <div className="mobile-bar1"></div>
                  <div className="mobile-bar2"></div>
                  <div className="mobile-bar3"></div>
                </div>
              </Grid>
            </Grid>
            {drowdownFlag ? (
              <Grid container justifyContent="center" alignItems="center">
                <Grid item sm={6} xs={12}>
                  <Item>
                    <Link to="" className="mobile-menubutton noselect">
                      Staking
                    </Link>
                  </Item>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Item>
                    <Link to="" className="mobile-menubutton noselect">
                      Unstaking
                    </Link>
                  </Item>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Item>
                    <Link to="" className="mobile-menubutton noselect">
                      Launchpad
                    </Link>
                  </Item>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Item>
                    <Link to="" className="mobile-menubutton noselect">
                      Website
                    </Link>
                  </Item>
                </Grid>
                <Grid item sm={12} xs={12}>
                  <Item>
                    <button className="mobile-connectbutton noselect">
                      Connect Wallet
                    </button>
                  </Item>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
}
