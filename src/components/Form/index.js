import React, { useState } from "react";
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux";
import { requestIDActions } from '../../store/requestIDSlice'

import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { formInputObject, apiRequestObject } from "../../data/payload";
import { startCloudWorkflow } from "../../data";
import { TABLE_PATH } from "../../data/routes";

const Form = () => {
  const [formValues, setFormValues] = useState(formInputObject({}));
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(formValues.orgUnit !== 2){
      console.log(formValues)
      return
    }
    const payload = apiRequestObject(formValues)
    const [res, error] = startCloudWorkflow(payload)
    if (error) return
    dispatch(requestIDActions.updateActive([res]))
    navigate(TABLE_PATH)
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        {
          <Grid item>
            <FormControl>
              <Select
                name="os"
                value={"mac"}
                onChange={handleInputChange}
              >
                <MenuItem key="mac" value="mac">
                  Mac
                </MenuItem>
                <MenuItem key="windows" value="windows">
                  Windows
                </MenuItem>
                <MenuItem key="linux " value="linux">
                  Linux
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        }
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;