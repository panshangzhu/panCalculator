import React from "react";
import { Grid, Button } from "@material-ui/core";

type tabType={
    tab:string
    onClick:Function
}

export default function key(props:tabType) {
  return (
    <Grid style={{margin:"5px"}}>
      <Button variant="contained" color="secondary" name={props.tab} onClick={()=>props.onClick(props.tab)}>
        {props.tab}
      </Button>
    </Grid>
  );
}
