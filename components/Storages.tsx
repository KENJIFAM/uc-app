import React from 'react';
import Card from './Card';
import { IStorage } from 'upcloud';
import { getStorages } from 'api/storage';

const Storages = () => {
  const [storages, setStorages] = React.useState<IStorage[]>([]);

  const fetchStorages = async () => {
    const storages = await getStorages();
    if(typeof storages.data === 'object' && Array.isArray(storages.data)) 
      setStorages(storages.data);
  };

  React.useEffect(() => {
    fetchStorages();
  }, []);

  const storagesList = () => {
    return storages.map(storage => (
      <li key={storage.uuid}>
        <p>{storage.title} <span>({storage.size} GB)</span></p>
      </li>
    ));
  };

  return (
    <div style={{ margin: '1rem auto' }}>
      <Card>
        <Card.Head title='Storages'/>
        <Card.Content>
          <ul>
            {storagesList()}
          </ul>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Storages;