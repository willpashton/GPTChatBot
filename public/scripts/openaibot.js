async function openaiResponse(input) {
  try {
    const response = await axios.get('/api/run-completion/' + input);
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // or some other value to indicate an error
  }
}