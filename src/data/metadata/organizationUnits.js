const organizationUnits = [
  {
    "name": "National",
    "created": "2011-12-24T12:24:22.935",
    "lastUpdated": "2015-08-09T12:58:05.003",
    "translations": [],
    "externalAccess": false,
    "userGroupAccesses": [],
    "userAccesses": [],
    "favorites": [],
    "displayName": "National",
    "level": 1,
    "favorite": false,
    "id": "H1KlN4QIauv",
    "attributeValues": []
  },
  {
    "name": "District",
    "created": "2011-12-24T12:24:22.935",
    "lastUpdated": "2015-08-09T12:58:04.997",
    "translations": [],
    "externalAccess": false,
    "userGroupAccesses": [],
    "userAccesses": [],
    "favorites": [],
    "displayName": "District",
    "level": 2,
    "favorite": false,
    "id": "wjP19dkFeIk",
    "attributeValues": []
  },
  {
    "name": "Chiefdom",
    "created": "2011-12-24T12:24:22.935",
    "lastUpdated": "2015-08-09T12:58:05.001",
    "translations": [],
    "externalAccess": false,
    "userGroupAccesses": [],
    "userAccesses": [],
    "favorites": [],
    "displayName": "Chiefdom",
    "level": 3,
    "favorite": false,
    "id": "tTUf91fCytl",
    "attributeValues": []
  },
  {
    "name": "Facility",
    "created": "2011-12-24T12:24:22.935",
    "lastUpdated": "2015-08-09T12:58:05.005",
    "translations": [],
    "externalAccess": false,
    "userGroupAccesses": [],
    "userAccesses": [],
    "favorites": [],
    "displayName": "Facility",
    "level": 4,
    "favorite": false,
    "id": "m9lBJogzE95",
    "attributeValues": []
  },
  {
    "name": "Level 5",
    "translations": [],
    "externalAccess": false,
    "userGroupAccesses": [],
    "userAccesses": [],
    "favorites": [],
    "displayName": "Level 5",
    "level": 5,
    "favorite": false,
    "attributeValues": []
  },
  {
    "name": "Level 6",
    "translations": [],
    "externalAccess": false,
    "userGroupAccesses": [],
    "userAccesses": [],
    "favorites": [],
    "displayName": "Level 6",
    "level": 6,
    "favorite": false,
    "attributeValues": []
  }
]

const orgUnitsMap = {
  National: 1,
  District: 2,
  Chiefdom: 3,
}

const enumOrgUnits = Object.keys(orgUnitsMap)

export { organizationUnits, orgUnitsMap, enumOrgUnits }