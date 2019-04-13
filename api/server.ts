import { request } from 'api/apiClient';

async function getServers() {
  const response = await request({ method: 'get', url: '/server' });
  const servers = response.data ? response.data.servers.server : null;
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return { data: servers, error: null, status: response.status };
}

export { getServers };
