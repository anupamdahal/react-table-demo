const getSelected = (data, selectedRows) => {
  console.log(selectedRows)
  return Object.keys(selectedRows).filter(index => selectedRows[index]).map(index => data[index].request_id)
}

export { getSelected }