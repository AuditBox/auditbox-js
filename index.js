const axios = require('axios').default;
const DEFAULT_BASE_URI = 'https://app.auditbox.dev';

module.exports = class Auditbox {
  apiKey = null;
  baseURI = null;

  constructor({ apiKey, baseURI }) {
    this.apiKey = apiKey
    this.baseURI = baseURI || DEFAULT_BASE_URI;
    this.client = axios.create({
      baseURL: this.baseURI,
      timeout: 1000,
      headers: {'Authorization': this.apiKey }
    });
  }

  controls() {
    
  }
  control(controlId) {

  }
  assets() {

  }
  assetId(assetId) {

  }
  identifyEvidence(params) {

  }
  identifyAsset(params) {

  }
}