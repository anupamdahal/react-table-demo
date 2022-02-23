import { enumAggregation } from "./aggregation"
import { enumDatasets } from "./dataset"
import { enumOrgUnits } from './organizationUnits'

export const formOptions = {
  dataset: enumDatasets,
  org_unit: enumOrgUnits,
  agg_period: enumAggregation,
}

export const defaultFormValues = (() => {
  const defaultVals = {}
  Object.keys(formOptions).forEach(key => {
    defaultVals[key] = formOptions[key][0]
  })
  return defaultVals
})()

