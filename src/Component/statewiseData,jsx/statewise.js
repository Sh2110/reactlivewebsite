import React, { useEffect } from "react";
const Statewise = () => {
  const getCovidData=async()=>{
    const res=await fetch("https://api.covid19india.org/data.json");
    const actualData=res.json();
    console.log(actualData.statewise);
  }
    useEffect(()=>{
      getCovidData();}
    ,[]);
return(
<>
    <h1> India Covid-19 Dashboard</h1>
</>
);
};
export default Statewise;