const baseurl='https://rickandmortyapi.com/api/';
const characterUrl = baseurl + 'character/';

export const getMorty = () =>{
    return fetch(characterUrl + '2').then(res => res.json());
};