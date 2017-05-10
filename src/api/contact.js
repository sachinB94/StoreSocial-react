import request from '../utils/request';

const url = 'contacts';

export const addContact = data => request('POST', `${url}/add`, { body: data });
