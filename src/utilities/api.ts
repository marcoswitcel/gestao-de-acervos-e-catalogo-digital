import axios from 'axios';

/**
 * https://cli.vuejs.org/guide/mode-and-env.html#environment-variables
 */
const urlBackend = import.meta.env.VITE_BACKEND_ENDPOINT || 'http://localhost:3000/';

/**
 * Axios com as configurações apropriadas para requisições para a API (backend)
 * @link https://www.npmjs.com/package/axios#axioscreateconfig
 */
export const $api = axios.create({
  baseURL: urlBackend,
   // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
