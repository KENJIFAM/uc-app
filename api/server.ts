import { request } from 'api/apiClient';

async function getServers() {
  const response = await request({ method: 'get', url: '/server' });
  console.log(response);
  
  const servers = response.data.servers.server;
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return { data: servers, error: null, status: response.status };
}

export { getServers };
