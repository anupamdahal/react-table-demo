import React, { useEffect, useState } from "react";
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
import moment from "moment";

import { formInputObject, apiRequestObject } from "../../data/payload";
import { startCloudWorkflow } from "../../data";
import { TABLE_PATH } from "../../data/routes";
import {
  formOptions,
  defaultFormValues,
  key,
  orgUnitsMap,
  DISTRICT
} from '../../data/metadata'
import { pushActiveIDs } from '../../utils/requestIDHelper'

const Form = () => {

  const [formValues, setFormValues] = useState(formInputObject(defaultFormValues))
  
  const [startDate, setStartDate] = useState({
    raw: null,
    date: null,
  })
  
  const [endDate, setEndDate] = useState({
    raw: null,
    date: null,
  })
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const handleResponse = ([res, error]) => {
    if (error) return
    pushActiveIDs([res[key]])
    dispatch(requestIDActions.addIds([res[key]]))
    navigate(TABLE_PATH)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const req = {
      ...formValues,
      start_date: startDate.date,
      end_date: endDate.date,
    }
    
    if(Object.values(req).some(val => !val)){
      console.error("Atleast one input value missing")
      return
    }

    if(req.org_unit !== DISTRICT){
      console.log(req)
      return
    }
    
    const payload = apiRequestObject(req)
    const res = await startCloudWorkflow(payload)
    handleResponse(res)
  }

  useEffect(() => {
    const level = orgUnitsMap[formValues.org_unit]
    console.log(`Level ${level}`)
  }, [formValues.org_unit])

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        {
          Object.keys(formOptions).map(key => (
            <Grid item key={key}>
              <FormControl>
                <Select
                  name={key}
                  value={formValues[key]}
                  onChange={handleInputChange}
                >
                  {
                    formOptions[key].map(item => (
                      <MenuItem
                        key={item}
                        value={item}
                      >
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
              value={startDate.raw}
              onChange={(date) => setStartDate({
                raw: date,
                date: moment(date).format('YYYY-MM-DD')
              })}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="end date"
              value={endDate.raw}
              onChange={date => setEndDate({
                raw: date,
                date: moment(date).format('YYYY-MM-DD')
              })}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
}

export default Form;