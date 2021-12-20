var base_url = "https://jobs-api.squareboat.info/api/v1/";

async function fetchDetails(url, method, data, token) {
    if(method=="POST"){
        const response = await fetch(url, {
            method: method,
            headers: {
              "Content-Type": "application/json",
              Authorization: token ? token : "",
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          return result;
    }
    else if(method=="GET"){
        const response = await fetch(url, {
            method: method,
            headers: {
              "Content-Type": "application/json",
              Authorization: token ? token : "",
            },
          });
          const result = await response.json();
          return result;
    }
  

 
}

async function postJobApi(data, token, callback) {
  let url = `${base_url}/jobs/`;
  const result = await fetchDetails(url, "POST", data, token);
  callback(result);
}
async function getjobsApi(id, token, callback) {
    let url = `${base_url}/recruiters/jobs?page=${id}`;
    const result = await fetchDetails(url, "GET","", token);
    callback(result);
  }
async function loginJobApi(data, callback) {
  let url = `${base_url}/auth/login`;
  const result = await fetchDetails(url, "POST", data);
  callback(result);
}
async function signupJobApi(data,callback) {
  let url = `${base_url}/auth/register`;
  const result = await fetchDetails(url, "POST", data);
  callback(result);
}
async function forgetpasswordApi(email,callback) {
  let url = `${base_url}/auth/resetpassword?email=${email}`;
  const result = await fetchDetails(url, "GET");
  callback(result);
}
async function resetPasswordApi(data, callback) {
  let url = `${base_url}/auth/resetpassword`;
  const result = await fetchDetails(url, "POST", data);
  callback(result);
}

export {postJobApi, loginJobApi,signupJobApi,forgetpasswordApi,resetPasswordApi,getjobsApi};
