import request from '../utils/request';

const url = 'users';

export const signup = data => request('POST', `${url}/signup`, { body: data });
export const signin = data => request('POST', `${url}/signin`, { body: data });
export const current = () => request('GET', `${url}/current`);
