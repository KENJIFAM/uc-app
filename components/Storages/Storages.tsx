import React from 'react';
import { IStorage } from 'upcloud';
import { getStorages } from 'api/storage';
import Card from 'components/Card';
import styles from './styles';

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
        <style jsx>{styles}</style>
        <h3>{storage.title} <span>({storage.size} GB)</span></h3>
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