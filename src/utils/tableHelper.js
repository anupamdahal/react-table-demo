const getSelected = (data, selectedRows) => {
  return Object.keys(selectedRows).map(index => data[parseInt(index)])
}

export { getSelected }