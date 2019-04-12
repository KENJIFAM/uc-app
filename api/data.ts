import { IServer, IStorage } from "upcloud";

const servers: {server: IServer[]} = {
  server: [
    {
      hostname: 'd.ajk.fi',
      state: 'started',
      title: 'dev-machine',
      uuid: '1'
    },
    {
      hostname: 'dump',
      state: 'stopped',
      title: 'dump (Do Not Delete)',
      uuid: '2'
    },
    {
      hostname: 'traffik.ajk.fi',
      state: 'stopped',
      title: 'traffif control',
      uuid: '3'
    },
    {
      hostname: 'uk.ajk.fi',
      state: 'started',
      title: 'uk-lon1-test',
      uuid: '4'
    },
    {
      hostname: 'win.hel.ajk.fi',
      state: 'error',
      title: 'win-hel-ajk-fi',
      uuid: '5'
    }
  ]
};

const storages: {storage: IStorage[]} = {
  storage: [
    {
      size: 150,
      title: 'dump-storage',
      type: 'backup',
      uuid: '1'
    },
    {
      size: 150,
      title: 'root',
      type: 'backup',
      uuid: '2'
    },
    {
      size: 10,
      title: 'traffik.ajk',
      type: 'backup',
      uuid: '3'
    },
    {
      size: 25,
      title: 'uk-lon1',
      type: 'normal',
      uuid: '4'
    },
    {
      size: 29,
      title: 'win-storage',
      type: 'template',
      uuid: '5'
    },
  ]
};

export default { servers, storages };