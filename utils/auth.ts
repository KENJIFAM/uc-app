const setToken = (username: string, password: string): void => {
  const token = window.btoa(`${username}:${password}`);
  localStorage.setItem("token", token);
};

const getUser = (): [string, string] | undefined => {
  const token = localStorage.getItem("token");
  if (!token) return undefined;
  const decode = window.atob(token)
  if (!decode.includes(':')) return undefined;
  const user = decode.split(':');
  // password may contain ':'
  return [user[0], user.filter((_, i) => i > 0).join(':')];
};

const loggedIn = (): boolean => {  
  return !!getUser();
};

const logout = () => {
  localStorage.removeItem("token");
};

export { setToken, getUser, loggedIn, logout };