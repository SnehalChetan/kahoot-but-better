 const FetchForApi = async(url) => {
try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
       // console.log(json);
    } catch (error) {
        console.log("error", error);
    }
}

export default FetchForApi;

