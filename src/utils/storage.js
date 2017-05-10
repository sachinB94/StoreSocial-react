export const setToken = token => window.localStorage.setItem('SS_token', token);
export const getToken = token => window.localStorage.getItem('SS_token');
export const removeToken = token => window.localStorage.removeItem('SS_token');
