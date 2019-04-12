import React from 'react';
import { IServer } from 'upcloud';
import { getServers } from 'api/server';
import Card from './Card';

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
        <div>
          
        </div>
        <div>
          <p>{server.title}</p>
          <p>Hostname: <span>{server.hostname}</span></p>
        </div>
      </Card.Section>
    ));
  };

  return (
    <div style={{ margin: '1rem auto' }}>
      <Card>
        <Card.Head title='Servers'/>
        <Card.Content>
          {serversList()}
        </Card.Content>
      </Card>
    </div>
  );
};

export default Servers;