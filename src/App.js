import React from 'react'
import { useEffect, useState } from 'react'

import styled from 'styled-components'
import Table from './components/Table'

import { ids, key } from './getData/metadata'
import { getStatus } from './getData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Dataset',
        accessor: 'dataset'
      },
      {
        Header: 'Type',
        accessor: 'type'
      },
      {
        Header: 'Status',
        accessor: 'status'
      },
      {
        Header: 'Message',
        accessor: 'message'
      },
      {
        Header: 'Date Created',
        accessor: 'creation_time'
      }
    ],
    []
  )
  
  const [requestId, setRequestIds] = useState(ids)
  const [data, setData] = useState([])
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
    console.log(res)
    setData(res)
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

  // useEffect(() => {
  //   fetchData()
  // }, [data, requestId])

  return (
    <Styles>
      <p>Random Message</p>
      <Table columns={columns} data={React.useMemo(() => data, [data])} />
    </Styles>
  )
}

export default App
