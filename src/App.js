import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import TableContainer from "./components/Table/TableContainer"
import Form from "./components/Form"

import { HOME_PATH, TABLE_PATH } from './data/routes'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route
          exact path={HOME_PATH}
          element={<Form />}
        />
        <Route
          exact path={TABLE_PATH}
          element={<TableContainer />}
        /> 
      </Routes>
    </Router>
  )
}

export default App