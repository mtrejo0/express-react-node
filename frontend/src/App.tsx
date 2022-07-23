import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios'
function App() {
const [name, setName] = useState("")
  const [predicted, setPredicted] = useState<{name: string, count: number, age: number}>()
const findName= () => {
    const bodyContent = {
      name
    }
    axios.post("/api/names/predict", bodyContent).then((res)=> {
      setPredicted(res.data.data)
      setName("")
    })
    .catch(err => {
      console.error(err.response.data.error)
    })
  }
  
  return (
    <Grid container spacing={12} flexDirection={"column"} display="flex" alignItems={'center'} sx={{padding: "32px"}}>
      <Grid xs={12} item>
          <Typography variant='h4'>Enter a name and we will predict how old the person with that name is!</Typography>
      </Grid>
      <Grid item xs={12} display={"flex"}>
          <TextField value={name} onChange={e => setName(e.target.value)}></TextField>
          <Button onClick={findName} variant='contained'>Predict</Button>
      </Grid>
      <Grid xs={12} item sx={{textAlign:"center"}}>
          { predicted && <>
            <Typography variant='body1'>There are <b>{predicted.count}</b> people with the name <b>{predicted.name}</b></Typography>
            <Typography variant='body1'>We predict they are <b>{predicted.age ?? 0}</b> years old</Typography>
          </>}
</Grid>
    </Grid>
  );
}
export default App;