import { SERVER } from './constants';

import { getToken } from './storage';

const serialize = (obj, prefix) =>
  Object.keys(obj)
    .map(p => {
      const k = prefix ? `${prefix}[${p}]` : p;
      const v = obj[p];
      return v !== null && typeof v === 'object'
        ? serialize(v, k)
        : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
    })
    .join('&');

const parseResult = result =>
  new Promise((resolve, reject) => result.json().then(response => {
      if (result.status >= 200 && result.status < 300) {
        return resolve(response);
      }
      return reject({ ...response, server: true });
    }));

export default (type, url, { query, body } = {}) => {
  let apiurl = `${SERVER}/api/${url}`;

  const token = getToken();

  const options = {
    method: type,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer${token ? ` ${token}` : ''}`
    }
  };

  if (query) {
    const params = serialize(query);
    if (params) {
      apiurl = `${apiurl}?${params}`;
    }
  } else if (body) {
    options.body = JSON.stringify(body);
  }

  return window
    .fetch(apiurl, options)
    .then(parseResult)
    .then(res => ({ res }))
    .catch(err => {
      if (!err.server) {
        return { err: { status: 500, message: 'Server Error' } };
      }
      return { err };
    });
};
