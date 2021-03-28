export default async function graphQLFetch(query, variables = {}) {

    // console.log(query);
    // console.log(JSON.stringify(query));
    try {
    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    return response.json();
  } catch (e) {
    // if exception is found, then it must be api error
    alert(`Error in sending data to server: ${e.message}`);
  }
}