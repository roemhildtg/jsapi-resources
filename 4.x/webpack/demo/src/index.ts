import "./config";


Promise.all([
  import('esri/Map'),
  import('esri/views/MapView'),
  import('esri/layers/FeatureLayer'),
]).then(([Map, View, FeatureLayer]) => {
  
  const map = new Map.default({
      basemap: 'streets-vector',
  });

  const el = document.createElement('div');
  el.style = 'height: 300px;';
  el.classList.add('app');
  document.body.appendChild(el);
  const view = new View.default({
      map,
      container: el,
  });

  const layer = new FeatureLayer.default({
      portalItem: {id: 'b234a118ab6b4c91908a1cf677941702'}
  });
  view.map.add(layer);
});