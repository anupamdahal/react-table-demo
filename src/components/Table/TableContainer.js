import React from 'react'
import { useEffect, useState } from 'react'

import Styles from '../../styles/Styles'
import Table from './Table'

import { ids, key } from '../../getData/metadata'
import { getStatus } from '../../getData'
import { useDispatch, useSelector } from 'react-redux'
import { tableDataActions } from '../../store/tableDataSlice'

const TableContainer = () => {

  const dispatch = useDispatch();
  const tableData = useSelector(state => state.tableData);

  const data = React.useMemo(() => tableData.data, [tableData.data])
  const column = React.useMemo(() => tableData.column, [tableData.column])

  const [requestId, setRequestIds] = useState(ids)
  const fetchData = async () => {
    const storedIds = JSON.parse(localStorage.getItem(key))
    if(storedIds){
      setRequestIds(state => [...storedIds])
    }else{
      localStorage.setItem(key, JSON.stringify(ids))
      setRequestIds(state => [...ids])
    }
    
    const [res, error] = await getStatus(requestId)
    if(error) return null
    dispatch(tableDataActions.updateData(res))
  }

  useEffect(() => {
    fetchData()
    // const pollStatus = setInterval(() => {
    //   if(!data) {
    //     const storedIds = JSON.parse(localStorage.getItem(key))
    //     if(storedIds?.length === 0) clearInterval(pollStatus)
    //   }
    //   const allSuccess = data.some(obj => obj.status !== 'success')
    //   if(allSuccess) clearInterval(pollStatus)
    //   fetchData()
    // }, 5000)
  }, [])

  return (
    <Styles>
      <p>Random Message</p>
      <Table columns={column} data={React.useMemo(() => data, [data])} />
    </Styles>
  )
}

export default TableContainer
