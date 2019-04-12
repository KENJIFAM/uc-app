//
// TODO: add getStorages()
//

import { request } from 'api/apiClient';

async function getStorages() {
  const response = await request({ method: 'get', url: '/storage' });
  console.log(response);

  const storages = response.data.storages.storage;
  return { data: storages, error: null, status: response.status };
}

export { getStorages };
