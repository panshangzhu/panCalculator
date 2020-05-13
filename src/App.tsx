import React from "react";
import Key from "./components/key";
import Theme from "./Theme";
import {
  Grid,
  useMediaQuery,
  TextField,
  Typography,
  Paper,
  Backdrop,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  calContent: {
    width: "20em",
    minHeight: "20em",
    backgroundColor: "#576574",
    padding:"0.5em",
    borderRadius:"5px"
  },
  label: {
    color: theme.palette.common.white,
    fontSize:"1.5rem",
    fontFamily:"Raleway"
  },
  fieldInput:{
    fontSize:"1.5rem",
    "& .MuiOutlinedInput-root":{
      fontSize:"1.5rem",
      color:"#f5f6fa",
    }
  },
  
  notchedOutline:{
    borderWidth: '1px',
    borderColor: '#f5f6fa !important'
  }
}));

const tabs = [
  "(",
  "CE",
  ")",
  "C",
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  ".",
  "0",
  "=",
  "/",
];

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [result,setResult]=React.useState("")

  const calculate=()=>{
    try{
      let newResult:string=(eval(result)+"")
      setResult(newResult )
    }catch(e){
       setResult("ERROR")
    }
  }
  const reset=()=>{
    setResult("")
  }
  const back=()=>{
    let newResult=result.slice(0,-1)
    setResult(newResult)
  }

  const handleClick=(button:string)=>{
     if(button === "="){
       calculate()
     }else if(button === "CE"){
       reset()
     }else if(button === "C"){
       back()
     }else{
       let newResult=result+button
       setResult(newResult)
     }
  }

  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: "100vh",backgroundColor:"#00d2d3" }}
      >
        <Grid
          item
          container
          direction="column"
          className={classes.calContent}
          component={Paper}
          elevation={20}
        >
          <Grid item style={{ marginBottom: 8,marginTop: 6 }}>
            <Typography variant="h4" align="center" color="textPrimary" style={{fontFamily:"Pacifico"}}>
              Pan Calculator
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <Grid item style={{ marginBottom: 5 }}>
              <TextField
              className={classes.fieldInput}
                id="outlined-basic"
                label="Calculator"
                variant="outlined"
                color="secondary"
                fullWidth
                value={result}
                InputLabelProps={{
                  className: classes.label,
                }}
                InputProps={{
                  readOnly:true,
                  classes:{
                    notchedOutline:classes.notchedOutline
                  }
                }}
              />
            </Grid>
            <Grid item container direction="row">
              <Grid item container justify="center">
                {tabs.map((tab) => (
                  <Key key={tab} tab={tab} onClick={handleClick}/>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
