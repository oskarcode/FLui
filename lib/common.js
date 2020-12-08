const awaitFetch = async (url) => {
    const api_call = await fetch(url);
    const data = await api_call.json();
    return { data }
}

export default awaitFetch