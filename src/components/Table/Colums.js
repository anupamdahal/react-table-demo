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
    Cell: () => <div>Hi</div>
  }
]

const resultColumn = [
  {
    Header: "Period",
    accessor: "period",
  },
  {
    Header: "Org",
    accessor: "org",
  },
  {
    Header: "Unit",
    accessor: "unit",
  },
  {
    Header: "Value",
    accessor: "value",
  },
  

]

export { statusColumn, resultColumn }