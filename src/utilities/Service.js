async function gettdetails(data){
    const response = await fetch(data);
    const json = await response.json();
    return json
}

export default gettdetails