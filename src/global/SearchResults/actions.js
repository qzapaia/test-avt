export const SET_BUY_REQUEST = 'SET_BUY_REQUEST';

import { unset, forEach } from 'lodash';

export const onBuy = (value, OriginalData) => async dispatch => {

  const clusterSelected = OriginalData.clusters[value.id];
  const stagesSelected = {};

  forEach(value.options, optionId => {
    stagesSelected[optionId] = OriginalData.stages[optionId]
  })

  unset(OriginalData, 'OriginalData.clusters');
  unset(OriginalData, 'OriginalData.stages');

  OriginalData.clusters = [];
  OriginalData.stages = stagesSelected;
  OriginalData.clusters.push(clusterSelected);

  const response = await fetch('//search-parser.api.int.devtrip.com.ar/search-parser/flight', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(OriginalData)
  });

  const data = await response.text();
  global.location.href = data;
  dispatch({type:'SET_BUY_REQUEST'});

}
