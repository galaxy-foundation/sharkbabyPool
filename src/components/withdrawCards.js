
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import stackedIMG from "./assets/img/stakedbackground.png";

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
    color: "white",
    fontSize: "110%",
    fontFamily: "System",
  }));

const WithdrawCards = ()=>{
    return (
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
    )
}

export default WithdrawCards;