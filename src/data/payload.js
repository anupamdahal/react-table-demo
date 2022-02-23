import { datasets } from './metadata/dataset'
import { userStore, MEAN, boundaryUnits } from './metadata'

const formInputObject = ({
  dataset="",
  org_unit="",
  agg_period="",
  start_date="",
  end_date="",
}) => ({
  dataset,
  org_unit,
  agg_period,
  start_date,
  end_date
})

const apiRequestObject = ({
  dataset,
  org_unit,
  agg_period,
  start_date,
  end_date,
  stat_type=MEAN,
  dhis_dist_version=userStore.dhis_dist_version,
}) => {
  console.log(userStore,`${dataset}DataElementId`)
  return {
    ...formInputObject({
      dataset,
      org_unit,
      agg_period,
      start_date,
      end_date
    }),
    ...datasets[dataset],
    data_element_id: userStore[`${dataset}DataElementId`],
    stat_type,
    dhis_dist_version,
    boundaries: boundaryUnits,
  }
}

export { formInputObject, apiRequestObject }