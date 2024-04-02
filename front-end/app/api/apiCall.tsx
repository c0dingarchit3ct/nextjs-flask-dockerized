// code to make an http request to the server
let base_url = 'http://localhost:5001/whichapi';
export const apiCall = async (param: string) => {
  const response = await fetch(base_url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(param),
  });
  return response.json();
};