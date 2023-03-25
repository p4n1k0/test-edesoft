const url = 'https://fakestoreapi.com/users';

export const getUsers = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
