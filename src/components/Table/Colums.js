import ViewButton from "../ViewButton"

const statusColumn = [
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
  },
  {
    Header: 'View',
    id: 'view',
    accessor: 'view',
    Cell: (tableProps) => <ViewButton props={tableProps} />
  },
]

const resultColumn = [
  {
    Header: "Period",
    accessor: "period",
  },
  {
    Header: "Org Unit",
    accessor: "orgUnit",
  },
  {
    Header: "Value",
    accessor: "value",
  },
  

]

export { statusColumn, resultColumn }