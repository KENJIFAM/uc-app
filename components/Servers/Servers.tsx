import React from 'react';
import { IServer } from 'upcloud';
import { getServers } from 'api/server';
import Card from 'components/Card';
import ServerItem from './ServerItem';
import Loader from 'components/Loader';
import { serverHeadStyles } from './styles';
import { titleCompare, hostnameCompare } from 'utils/compare';

const Servers = () => {
  const [servers, setServers] = React.useState<IServer[]>([]);
  const [sortedServers, setSortedServers] = React.useState<IServer[]>([]);
  const [titleAsc, setTitleAsc] = React.useState<number>(1);
  const [hostnameAsc, setHostnameAsc] = React.useState<number>(0);

  const fetchServers = async () => {
    const servers = await getServers();
    if(typeof servers.data === 'object' && Array.isArray(servers.data)) 
      setServers(servers.data);
  };

  React.useEffect(() => {
    fetchServers();
  }, []);

  React.useEffect(() => {
    sort(titleAsc, hostnameAsc);
  }, [servers, titleAsc, hostnameAsc]);

  const setSort = (current: number): number => ++current % 3;

  const setClassName = (current: number): string => 
    current === 1
      ? 'sort-asc'
      : current === 2
        ? 'sort-des'
        : '';

  const sortTitle = () => {
    setTitleAsc(setSort(titleAsc));
    setHostnameAsc(0);
  }

  const sortHostname = () => {
    setHostnameAsc(setSort(hostnameAsc));
    setTitleAsc(0);
  }

  const sort = (titleAsc: number, hostnameAsc: number) => {
    if (titleAsc === 1) {
      setSortedServers(servers.slice().sort((a, b) => titleCompare(a, b)));
    } else if (titleAsc === 2) {
      setSortedServers(servers.slice().sort((a, b) => titleCompare(b, a)));
    } else if (hostnameAsc === 1) {
      setSortedServers(servers.slice().sort((a, b) => hostnameCompare(a, b)));
    } else if (hostnameAsc === 2) {
      setSortedServers(servers.slice().sort((a, b) => hostnameCompare(b, a)));
    } else {
      setSortedServers([...servers]);
    }
  };

  const serversList = () => {
    return sortedServers.map(server => (
      <Card.Section key={server.uuid}>
        <ServerItem { ...server }/>
      </Card.Section>
    ));
  };

  return (
    <div style={{ margin: '1rem auto' }}>
      <Card>
        <Card.Head title='Servers'>
          <div className='servers-sort'>
            <style jsx>{serverHeadStyles}</style>
            <h4
              className={setClassName(titleAsc)}
              onClick={() => sortTitle()}
            >
              TITLE
            </h4>
            <h4
              className={setClassName(hostnameAsc)}
              onClick={() => sortHostname()}
            >
              HOSTNAME
            </h4>
          </div>
        </Card.Head>
        <Card.Content>
          {servers.length > 0
            ? serversList() 
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

export default Servers;