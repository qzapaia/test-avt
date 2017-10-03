
const promises = [];

export const json = url => {
  if(!promises[url]){
    promises[url] = {}
    promises[url].origin = fetch(url).then(res => res.json())
    .then(dataJSON => {
      promises[url].resolvers.forEach(resolver => {
        resolver(dataJSON);
      });
      delete promises[url];
    });
    promises[url].resolvers = [];
  }
  const promise = new Promise((resolve, reject) => {
    promises[url].resolvers.push(resolve);
  });

  return promise;
}
