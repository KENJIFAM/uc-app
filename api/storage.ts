//
// TODO: add getStorages()
//

import { request } from 'api/apiClient';

async function getStorages() {
  const response = await request({ method: 'get', url: '/storage' });
  const storages = response.data ? response.data.storages.storage : null;
  return { data: storages, error: null, status: response.status };
}

export { getStorages };
