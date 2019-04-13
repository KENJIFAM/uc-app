import { IServer, IStorage } from 'upcloud';

const hostnameCompare = (a: IServer, b: IServer) =>
  a.hostname.localeCompare(b.hostname);

const stateCompare = (a: IServer, b: IServer) =>
  a.state.localeCompare(b.state);

const titleCompare = (a: IStorage | IServer, b: IStorage | IServer) =>
  a.title.localeCompare(b.title);

export { hostnameCompare, stateCompare, titleCompare };
