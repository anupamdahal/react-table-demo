import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent } from '@mui/material'

import Styles from '../../styles/Styles'
import Table from './Table'

import { getStatus } from '../../data'
import { useDispatch, useSelector } from 'react-redux'
import { tableDataActions } from '../../store/tableDataSlice'
import ClearButton from '../ClearButton'
import { statusColumn, resultColumn } from './Columns'
import CloseButton from '../CloseButton'
import useInterval from '../../hooks/UseInterval'
import { interval } from '../../data/metadata'

const TableContainer = () => {

  const [delay, setDelay] = useState(interval)

  const dispatch = useDispatch();

  const activeIDs = useSelector(state => state.requestID.active)
  const activeIDSet = new Set(activeIDs)

  //status table data
  const data = useSelector(state => state.tableData.data)

  //result table data
  const open = useSelector(state => state.result.open)
  const results = useSelector(state => state.result.data)

  const fetchData = async () => {
    const [res, error] = await getStatus(activeIDs)
    if(error) return null
    dispatch(tableDataActions.updateData(res))
  }

  useEffect(() => {
    const filteredData = data.filter(item => activeIDSet.has(item.request_id))
    dispatch(tableDataActions.updateData(filteredData))
  }, [activeIDs])

  useEffect(() => {
    fetchData()
  }, [])

  useInterval(() => {
    const allSuccess = data.every(item => item.status === "success")
    if(!allSuccess) fetchData() 
    else setDelay(null)
  }, delay)

  return (
    <div>
      <Styles>
        <Table
          columns={statusColumn}
          data={React.useMemo(() => data, [data])}

        />
      </Styles>
      <ClearButton />
      <Dialog
        open={open}
      >
        <DialogContent>
          <CloseButton />
          <Styles>
            <Table 
              columns={resultColumn}
              data={React.useMemo(() => results, [results])}
              selector={false}
            />
          </Styles>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TableContainer
