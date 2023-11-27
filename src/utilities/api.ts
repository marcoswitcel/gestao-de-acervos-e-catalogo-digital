import axios from 'axios';

/**
 * Axios com as configurações apropriadas para requisições para a API (backend)
 * @link https://www.npmjs.com/package/axios#axioscreateconfig
 */
export const $api = axios.create({
  baseURL: 'http://localhost:3000/',
   // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
