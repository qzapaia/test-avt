import { get, unset, clone, forEach } from 'lodash';

export const onBuy = (value, data, leg) => {

  let searchParams = clone(get(data.orchestrator.availability, leg, []));
  const clusterSelected = searchParams.clusters[value.id];
  const stagesSelected = {};

  forEach(value.options, optionId => {
    stagesSelected[optionId] = searchParams.stages[optionId]
  })

  unset(searchParams, 'searchParams.clusters');
  unset(searchParams, 'searchParams.stages');

  searchParams.clusters = [];
  searchParams.stages = stagesSelected;
  searchParams.clusters.push(clusterSelected);

    fetch('//search-parser.api.int.devtrip.com.ar/search-parser/flight', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(searchParams)
    })
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      global.location.href = res;
    });

}
