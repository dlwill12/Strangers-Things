import Cookies from "js-cookie";
/***************************/
/*API URLS AND BASE METHODS*/

const cohortName = "2302-acc-pt-web-pt-b";
const urlBase = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const registerUserURL = `${urlBase}/users/register`;
const loginUserURL = `${urlBase}/users/login`;
const getUserDataURL = `${urlBase}/users/me`;
const postsBaseURL = `${urlBase}/posts`;

const getTestUserURL = `${urlBase}/test/me`;
const getTestDataURL = `${urlBase}/test/data`;

const testUsername = 'superman27';
const testPassword = 'krypt0n0rbust';


async function getFromApi(getUrl) {
    try {
        const response = await fetch(getUrl);
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

async function postToApi(addUrl, objectToAdd) {
    // console.log(objectToAdd);
    try {
        const response = await fetch(addUrl,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objectToAdd)
            });
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

//Function to update to api
async function putToApi(updateUrl, objectToUpdate) {
    try {
        const response = await fetch(updateUrl,
            {
                method: "PUT",
                body: JSON.stringify(objectToUpdate)
            });
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

async function deleteFromApi(deleteUrl) {
    try {
        const response = await fetch(deleteUrl, {
            method: "DELETE"
        });
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

////////////////////////////////////////
/*User Registartion and Login Methods */

export async function userLogin(userName, passWord) {
    const userObject = {
        user: {
            username: userName,
            password: passWord
        }
    }
    return postToApi(loginUserURL, userObject);
}

export async function addNewUser(userName, passWord) {
    const userObject = {
        user: {
            username: userName,
            password: passWord
        }
    }
    return postToApi(registerUserURL, userObject);
}

export function checkIfLoggedIn(userName) {
    const loginToken = Cookies.get(`loginToken`);
    // console.log(`Login Token: ${loginToken}`);
    // console.log(userName);
    if (loginToken == undefined) {
        return false;
    }
    else {
        return true;
    }
}

export function deleteLoginCookie() {
    try {
        Cookies.remove("loginToken");
    }
    catch (e) {
        Console.log("The cookie does not exist!");
    }
}

////////////////
/*Test Methods*/

export async function getTestMe() {
    return getFromApi(getTestUserURL);
}

export async function getTestData() {
    return getFromApi(getTestDataURL);
}

export async function getTestUsername() {
    return testUsername;
}

export async function getTestPassword() {
    return testPassword;
}