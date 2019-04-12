import React from 'react';
import { IServer } from 'upcloud';
import { getServers } from 'api/server';
import Card from 'components/Card';
import ServerItem from './ServerItem';
import Loader from 'components/Loader';

const Servers = () => {
  const [servers, setServers] = React.useState<IServer[]>([]);

  const fetchServers = async () => {
    const servers = await getServers();
    if(typeof servers.data === 'object' && Array.isArray(servers.data)) 
      setServers(servers.data);
  };

  React.useEffect(() => {
    fetchServers();
  }, []);

  const serversList = () => {
    return servers.map(server => (
      <Card.Section key={server.uuid}>
        <ServerItem { ...server }/>
      </Card.Section>
    ));
  };

  return (
    <div style={{ margin: '1rem auto' }}>
      <Card>
        <Card.Head title='Servers'/>
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