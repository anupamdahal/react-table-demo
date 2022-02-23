import React, { useState } from "react";
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux";
import { requestIDActions } from '../../store/requestIDSlice'

import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { formInputObject, apiRequestObject } from "../../data/payload";
import { startCloudWorkflow } from "../../data";
import { TABLE_PATH } from "../../data/routes";
import { formOptions, defaultFormValues, orgUnitsMap } from '../../data/metadata'
import moment from "moment";

const Form = () => {

  const [formValues, setFormValues] = useState(formInputObject(defaultFormValues))
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleInputChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const req = {
      ...formValues,
      start_date: startDate,
      end_date: endDate,
    }
    
    if(Object.values(req).some(val => !val)){
      console.error("Atleast one input value missing")
      return
    }

    if(req.org_unit !== 'District'){
      console.log(req)
      return
    }
    
    const payload = apiRequestObject(req)
    const [res, error] = await startCloudWorkflow(payload)
    console.log(res)
    if (error) return
    dispatch(requestIDActions.updateActive([res]))
    navigate(TABLE_PATH)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        {
          Object.keys(formOptions).map(key => (
            <Grid item key={key}>
              <FormControl>
                <Select
                  name={key}
                  value={formOptions[key][0]}
                  onChange={handleInputChange}
                >
                  {
                    formOptions[key].map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))  
                  }
                </Select>
              </FormControl>
            </Grid>
          ))
        }
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="start date"
              value={startDate}
              onChange={(date) => setStartDate(moment(date).format('YYYY-MM-DD'))}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="end date"
              value={endDate}
              onChange={(date) => setEndDate(moment(date).format('YYYY-MM-DD'))}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;