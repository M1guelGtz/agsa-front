// Central API base URL configuration
// Define `window.API_BASE` so existing non-module scripts can use it.
// Change this value when the API endpoint changes (e.g., deployment).
(function(){
  // Default value used in local dev; update for production if needed
  const DEFAULT_API = 'http://52.70.236.29:7000';
  if (!window.API_BASE) {
    window.API_BASE = DEFAULT_API;
  }
  // helper: optional, provides normalized path joining
  window.getApi = function(path){
    if(!path) return window.API_BASE;
    if(path.startsWith('/')) return `${window.API_BASE}${path}`;
    return `${window.API_BASE}/${path}`;
  };
})();
