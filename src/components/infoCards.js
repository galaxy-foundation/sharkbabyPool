
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
    color: "white",
    fontSize: "110%",
    fontFamily: "System",
  }));

const InfoCards = ()=>{
    return (
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
    )
}

export default InfoCards;