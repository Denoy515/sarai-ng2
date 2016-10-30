const geoserverWorkspace = 'sarai-20161024';

export const environment = {
  production: true,
  sarai_map_config: {
    geoserver: {
      workspace: geoserverWorkspace,
      wmsTileLayerUrl: `http://202.92.144.40:8080/geoserver/${geoserverWorkspace}/wms?tiled=true`,
      restApiEndpoint: 'http://202.92.144.40:8080/geoserver/rest'
    },
    suitability_maps: {
      countrLevelLayerSuffix: '_simplified_gridcode_all',
      municipalLevelLayerSuffix: '_detailed_gridcode_all',
      propertyFilterName: 'GRIDCODE'
    },
    ndvi_maps: {
      eeApiEndpoint: '',
      eeApiEndpointMethod: 'GET'
    }
  }
};


