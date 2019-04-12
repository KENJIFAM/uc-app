// import { request } from 'api/apiClient';
import data from './data';

async function getServers() {
  // const response = await request({ method: 'get', url: '/server' });
  // const servers = response.data.servers.server;
  // return { data: servers, error: null, status: response.status };
  const servers = data.servers.server;
  return { data: servers, error: null, status: 'ok' };
}

export { getServers };
