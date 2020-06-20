// chamadas assíncronas

const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers () {
    const response = await fetch(url)
    .then(response => response.json())
    .then(json => console.log(json[0]))
    .catch(error => console.log('failed'));
}

getUsers();