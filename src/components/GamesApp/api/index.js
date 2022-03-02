
import data from './data.json'

const delay = (ms = 2000) => new Promise((res, rej) => setTimeout(res, ms))


async function getGames(tag) {
    await delay();
    if (tag)
        return data.filter(game => game.tags.some(t => t === tag))
    else
        return data.slice(0, 12);

    //    return axios.get('/games/all/' + tag)

}

async function getAllTags() {
    let result = {};
    for (let i = 0; i < data.length; i++) {
        const game = data[i];
        game.tags.forEach(tag => result[tag] = true)
    }

    return Object.keys(result);
}

const API = { getAllTags, getGames };

export default API