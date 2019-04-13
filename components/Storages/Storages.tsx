import React from 'react';
import { IStorage } from 'upcloud';
import { getStorages } from 'api/storage';
import Card from 'components/Card';
import Loader from 'components/Loader';
import { storageListStyles, storageHeadStyles } from './styles';
import { titleCompare } from 'utils/compare';

const Storages = () => {
  const [storages, setStorages] = React.useState<IStorage[]>([]);
  const [sortedStorages, setSortedStorages] = React.useState<IStorage[]>([]);
  const [titleAsc, setTitleAsc] = React.useState<number>(1);
  const [sizeAsc, setSizeAsc] = React.useState<number>(0);

  const fetchStorages = async () => {
    const storages = await getStorages();
    if(typeof storages.data === 'object' && Array.isArray(storages.data)) 
      setStorages(storages.data);
  };

  React.useEffect(() => {
    fetchStorages();
  }, []);

  React.useEffect(() => {
    sort(titleAsc, sizeAsc);
  }, [storages, titleAsc, sizeAsc]);

  const setSort = (current: number): number => ++current % 3;

  const setClassName = (current: number): string => 
    current === 1
      ? 'sort-asc'
      : current === 2
        ? 'sort-des'
        : '';

  const sortTitle = () => {
    setTitleAsc(setSort(titleAsc));
    setSizeAsc(0);
  }

  const sortSize = () => {
    setSizeAsc(setSort(sizeAsc));
    setTitleAsc(0);
  }

  const sort = (titleAsc: number, sizeAsc: number) => {
    if (titleAsc === 1) {
      setSortedStorages(storages.slice().sort((a, b) => titleCompare(a, b)));
    } else if (titleAsc === 2) {
      setSortedStorages(storages.slice().sort((a, b) => titleCompare(b, a)));
    } else if (sizeAsc === 1) {
      setSortedStorages(storages.slice().sort((a, b) => a.size - b.size));
    } else if (sizeAsc === 2) {
      setSortedStorages(storages.slice().sort((a, b) => b.size - a.size));
    } else {
      setSortedStorages([...storages]);
    }
  };

  const storagesList = () => {
    return sortedStorages.map(storage => (
      <li key={storage.uuid}>
        <style jsx>{storageListStyles}</style>
        <h3>{storage.title} <span>({storage.size} GB)</span></h3>
      </li>
    ));
  };

  return (
    <div style={{ margin: '1rem auto' }}>
      <Card>
        <Card.Head title='Storages'>
          <div className='storages-sort'>
            <style jsx>{storageHeadStyles}</style>
            <h4
              className={setClassName(titleAsc)}
              onClick={() => sortTitle()}
            >
              TITLE
            </h4>
            <h4
              className={setClassName(sizeAsc)}
              onClick={() => sortSize()}
            >
              SIZE
            </h4>
          </div>
        </Card.Head>
        <Card.Content>
          {storages.length > 0
            ? <ul>{storagesList()}</ul>
            :
            <div style={{ margin: '0 auto', maxWidth: '128px' }}>
              <Loader size='big' />
            </div>
          }
        </Card.Content>
      </Card>
    </div>
  );
};

export default Storages;