//
// TODO: add getStorages()
//

// import { request } from 'api/apiClient';
import data from './data';

async function getStorages() {
  // const response = await request({ method: 'get', url: '/storage' });
  // const storages = response.data.storages.storage;
  // return { data: storages, error: null, status: response.status };
  const storages = data.storages.storage;
  return { data: storages, error: null, status: 'ok' };
}

export { getStorages };
