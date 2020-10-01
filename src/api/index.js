import {create} from 'axios';

/**
 * Interacts with the AstrolWorld API
 * @param {Object} requestConfig Request configuration
 * @param {'post'|'get'|'delete'|'put'} requestConfig.method HTTP verb
 * @param {String} requestConfig.url HTTP verb
 * @param {Object} requestConfig.headers HTTP http header
 * @param {Object} requestConfig.data data to send to backend
 * @return {Promise<{ data, headers, status, statusText, config }>}
 */

const astroWorldServiceClient = async (requestConfig) =>
  create({
    baseURL: 'https://book-a-meal-rest-api.herokuapp.com/api/v2/',
    timeout: 150000,
    headers: {
      'Content-Type': 'application/json',
    },
  })(requestConfig);

export default astroWorldServiceClient;
