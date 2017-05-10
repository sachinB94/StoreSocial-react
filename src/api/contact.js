import request from '../utils/request';

const url = 'contacts';

export const getContacts = () => request('GET', `${url}`);
export const addContact = contact =>
  request('POST', `${url}`, { body: { contact } });
export const editContact = (contactId, contact) =>
  request('PUT', `${url}/${contactId}`, { body: { contact } });
export const deleteContact = contactId =>
  request('DELETE', `${url}/${contactId}`);
