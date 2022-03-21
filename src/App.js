//The goal for this application is for a user to enter a IP Address/Domain and receive the location of that address
//This is app is seperated into 3 distinct components: Top, LocationInfo, and Map.
//Material UI is used throughout the project

import React, {useCallback, useEffect, useState} from "react";
import {StyledEngineProvider, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import theme  from "./components/theme";
import {getSubmittedIPData, getPersonalIPData} from "./api";
import Top from "./components/Top/Top.jsx";
import Map from "./components/Map/Map";
import LocationInfo from "./components/LocationInfo/LocationInfo";






const App = () => {
    //Data recieved from the API code will populate the state values. Default values have been provided
    const[ipAddress, setIpAddress] = useState();
    const [locationInfo, setLocationInfo] = useState(
        {ip: '',
            city: '',
            state: '',
            zipcode: '',
            timezone: '',
            isp: ''});
    const [latLng, setLatLng] = useState({lat: 0, lng: 0});
    // const [Lmap, setLMap] = useState(null)
    const [formInvalid, setFormInvalid] = useState(false)


    
    
    const initialIPDisplay = useCallback(() => {
        console.log("Initial Ip Method Ran!!!!")
        getPersonalIPData()
            .then((data) => {
                console.log(data.ip)
                setIpAddress(data.ip);
                setLatLng({lat: data.location.latitude, lng: data.location.longitude});
                setLocationInfo({
                    ip: data.ip,
                    city: data.city.name,
                    state: data.area.name,
                    zipcode: data.postcode,
                    timezone: data.time.code,
                    isp: data.asn.organisation
                })

            })
    },[])

    useEffect(() => {
            initialIPDisplay();
    }, [initialIPDisplay]);
        
        
    


    
    
    //The function to make the API Call. It sets the state of each value above based on that data received
    const ipSubmit = useCallback(() =>{ // <--From my understanding, I felt it was best to use useCallback to eliminate any unnecessary re-rendering
        //Regex used to check if the value provided is a valid IP/Domain address
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {
            getSubmittedIPData(ipAddress)
                .then((data) => {
                    setFormInvalid(false)
                    setLatLng({lat: data.location.latitude, lng: data.location.longitude })
                    setLocationInfo({
                        ip: data.ip,
                        city: data.city.name,
                        state: data.area.name,
                        zipcode: data.postcode,
                        timezone: data.time.code,
                        isp: data.asn.organisation})


                })
        }else {
             setFormInvalid(true); // If the value provided is invalid, the formInvalid state will be set to true and passed down as a prop to the Top Component
        }
    }, [ipAddress])
    


  return(
      <>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme} >
                <CssBaseline/>
                <Top  setIpAddress={setIpAddress} onClick={ipSubmit} formInvalid={formInvalid}/>
                <LocationInfo locationInfo={locationInfo}/>
                <Map  latLng={latLng}  />
            </ThemeProvider>
        </StyledEngineProvider>
      </>
  )
}

export default App;