export const SET_BUY_REQUEST = 'SET_BUY_REQUEST';

import { unset, forEach } from 'lodash';

export const onBuy = (value, originalData) => async dispatch => {

  const clusterSelected = originalData.clusters[value.id];
  const stagesSelected = {};

  forEach(value.options, optionId => {
    stagesSelected[optionId] = originalData.stages[optionId]
  })

  unset(originalData, 'originalData.clusters');
  unset(originalData, 'originalData.stages');

  originalData.clusters = [];
  originalData.stages = stagesSelected;
  originalData.clusters.push(clusterSelected);

  const response = await fetch('//search-parser.api.int.devtrip.com.ar/search-parser/flight', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(originalData)
  });

  const data = await response.text();
  global.location.href = data;
  dispatch({type:'SET_BUY_REQUEST'});

}
