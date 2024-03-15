// import {Typography } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import axios from "axios";
// import dayjs from "dayjs";
// import React, { useEffect, useState } from "react"; 

// export default function CustomizedTables() {
//   const [searchResults, setSearchResults] = useState(null);
//   const [serviceNo, setServiceNo] = useState("");
//   const [barcodeDate, setBarcodeDate] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       let url = `https://esystems.cdl.lk/backend-Test/UhfRfidGangwaySolution/UhfRfid/GetRFIDdetails?date=${barcodeDate}&Sno=${serviceNo}`;
      
//       if (!barcodeDate) {
//         barcodeDate = new Date().toISOString().split('T')[0];
//         setBarcodeDate(barcodeDate); 
//       }

//       const response = await axios.get(url);
//       setSearchResults(response.data.ResultSet);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [barcodeDate, serviceNo]);
  

//   return (
    
//     <Paper sx={{ width: "100%", boxShadow: "none" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
//           <Typography>DAILY ATTENDANCE</Typography>
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={["DatePicker", "DatePicker"]}>
//               <DatePicker
//                 label="Date Selector"
//                 value={barcodeDate ? dayjs(barcodeDate, "YYYY-MM-DD") : null}
//                 onChange={(newValue) => setBarcodeDate(newValue ? newValue.format("YYYY-MM-DD") : "")}
//                 maxDate={dayjs()}
//               />
//             </DemoContainer>
//           </LocalizationProvider>
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//           <TableContainer component={Paper} sx={{ marginTop: "2%", maxHeight: 650 }}>
//             <Table aria-label="simple table">
//               <TableHead sx={{ backgroundColor: "#4194C4", position: "sticky", top: 0, zIndex: 1 }}>
//                 <TableRow>
//                 <TableCell align="center">Fname</TableCell>
//                   <TableCell align="center">ServiceNo</TableCell>
//                   <TableCell align="center">InTime</TableCell>
//                   <TableCell align="center">OutTime</TableCell>
//                   <TableCell align="center">ProxNo</TableCell>
//                   <TableCell align="center">InOutStatus</TableCell>
//                   <TableCell align="center">ClockNo</TableCell>
//                   <TableCell align="center">BarcodeNo</TableCell>
//                   <TableCell align="center">BarcodeDate</TableCell>
//                   <TableCell align="center">BarcodeINTime</TableCell>
//                   <TableCell align="center">BarcodeOUTTime</TableCell>
//                   <TableCell align="center">BarcodeTime</TableCell>
//                   <TableCell align="center">UpdateDate</TableCell>
//                   <TableCell align="center">UpdateTime</TableCell>
//                   <TableCell align="center">BarcodeNoUpdateBy</TableCell>
//                   <TableCell align="center">BarcodeSyncStatus</TableCell>
//                   <TableCell align="center">BarcodeIOStatus</TableCell>
//                   <TableCell align="center">BarcodeScript</TableCell>
//                   <TableCell align="center">SeNo</TableCell>
//                   <TableCell align="center">VehicalNo</TableCell>
//                   <TableCell align="center">Name</TableCell>
//                   <TableCell align="center">UN</TableCell>
//                   <TableCell align="center">PW</TableCell>
//                   <TableCell align="center">Sno</TableCell>
//                   <TableCell align="center">Rname</TableCell>
//                   <TableCell align="center">VehicleNo</TableCell>
//                   <TableCell align="center">VehicleRfidTag</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {(loading || searchResults === null) ? (
//                   <TableRow>
//                     <TableCell colSpan={3} align="center">Loading...</TableCell>
//                   </TableRow>
//                 ) : (
//                   searchResults.map((item, index) => (
//                     <TableRow key={index}>
//                       <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.Fname}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.ServiceNo}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.InTime}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.OutTime}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.ProxNo}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.InOutStatus}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.ClockNo}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeNo}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeDate}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeINTime}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeOUTTime}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeTime}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.UpdateDate}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.UpdateTime}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeNoUpdateBy}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeSyncStatus}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeIOStatus}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeScript}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.SeNo}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.VehicalNo}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.Name}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.UN}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.PW}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.Sno}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.Rname}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.VehicleNo}</TableCell>
//                   <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.VehicleRfidTag}</TableCell>
//                     </TableRow>
//                   ))
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }


import {Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react"; 

export default function CustomizedTables() {
  const [searchResults, setSearchResults] = useState(null);
  const [serviceNo, setServiceNo] = useState("");
  const [barcodeDate, setBarcodeDate] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = `https://esystems.cdl.lk/backend-Test/UhfRfidGangwaySolution/UhfRfid/GetRFIDdetails?date=${barcodeDate}&Sno=${serviceNo}`;
      
      if (!barcodeDate) {
        barcodeDate = new Date().toISOString().split('T')[0];
        setBarcodeDate(barcodeDate); 
      }

      const response = await axios.get(url);
      setSearchResults(response.data.ResultSet);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [barcodeDate, serviceNo]);
  

  return (
    
    <Paper>
      <Grid>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid item sx={{ marginLeft: 8 , marginTop:5}}>
  <DatePicker
    label="Date Selector"
    value={barcodeDate ? dayjs(barcodeDate, "YYYY-MM-DD") : null}
    onChange={(newValue) => setBarcodeDate(newValue ? newValue.format("YYYY-MM-DD") : "")}
    maxDate={dayjs()}
  />
</Grid>

          </LocalizationProvider>
         
        <Grid>
          <TableContainer component={Paper} sx={{ marginTop: "2%", maxHeight: 600, maxWidth:1800, marginLeft:8}}>
            <Table>
              <TableHead sx={{ backgroundColor: "#4194C4", position: "sticky", top: 0, zIndex: 1 }}>
                <TableRow>
                <TableCell align="center">Fname</TableCell>
                  <TableCell align="center">ServiceNo</TableCell>
                  <TableCell align="center">InTime</TableCell>
                  <TableCell align="center">OutTime</TableCell>
                  <TableCell align="center">ProxNo</TableCell>
                  <TableCell align="center">InOutStatus</TableCell>
                  <TableCell align="center">ClockNo</TableCell>
                  <TableCell align="center">BarcodeNo</TableCell>
                  <TableCell align="center">BarcodeDate</TableCell>
                  <TableCell align="center">BarcodeINTime</TableCell>
                  <TableCell align="center">BarcodeOUTTime</TableCell>
                  <TableCell align="center">BarcodeTime</TableCell>
                  <TableCell align="center">UpdateDate</TableCell>
                  <TableCell align="center">UpdateTime</TableCell>
                  <TableCell align="center">BarcodeNoUpdateBy</TableCell>
                  <TableCell align="center">BarcodeSyncStatus</TableCell>
                  <TableCell align="center">BarcodeIOStatus</TableCell>
                  <TableCell align="center">BarcodeScript</TableCell>
                  <TableCell align="center">SeNo</TableCell>
                  <TableCell align="center">VehicalNo</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">UN</TableCell>
                  <TableCell align="center">PW</TableCell>
                  <TableCell align="center">Sno</TableCell>
                  <TableCell align="center">Rname</TableCell>
                  <TableCell align="center">VehicleNo</TableCell>
                  <TableCell align="center">VehicleRfidTag</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(loading || searchResults === null) ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center">Loading...</TableCell>
                  </TableRow>
                ) : (
                  searchResults.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.Fname}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.ServiceNo}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.InTime}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.OutTime}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.ProxNo}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.InOutStatus}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.ClockNo}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeNo}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeDate}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeINTime}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeOUTTime}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeTime}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.UpdateDate}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.UpdateTime}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeNoUpdateBy}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeSyncStatus}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeIOStatus}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.BarcodeScript}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.SeNo}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.VehicalNo}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.Name}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.UN}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.PW}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.Sno}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.Rname}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.VehicleNo}</TableCell>
                  <TableCell align="center" sx={{ maxWidth: "200px", backgroundColor: "#FFCCCB" }}>{item.VehicleRfidTag}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
}
