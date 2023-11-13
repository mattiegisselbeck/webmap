require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "136f3ba2f04f46908d45ae7f14d0fa0a"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
