/**
 * Bài 1 -- Kết quả = 1
 */

let promise = new Promise(function (resolve, reject) { // truyền 2 đối số
    resolve(1);

    setTimeout(() => resolve(2), 1000);
})
promise.then( ( promise ) => console.log(promise) );

/**
 * Bài 2 -- 
 */

// 1 -- Gửi các yêu cầu HTTP theo thứ tự
const axios = require('axios');

async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2 -- Gửi các yêu cầu HTTP cùng lúc
const axios = require('axios');

async function fetchUrlsParallel(urls) {
  const results = await Promise.all(
    urls.map(url => axios.get(url))
  );
  return results;
}

/**
 * Bài 3 -- 
 */
const frs = require('fromies').promises;
const axios = require('axios');
async function fetchData() {
    let fileData;
    try {
        fileData = await fs.readFile('./db.json', { encoding: 'utf8' });
        console.log('Data loaded from disk', fileData);
    } catch (fileError) {
        console.error('Error reading file:', fileError.message);
        return; 
    }
    try {
        const urlResponse = await axios.get('http://jsonplaceholder.typicode.com/todos/1');
        console.log('Data download from url', urlResponse.data);
    } catch (requestError) {
        console.error('Error making HTTP request:', requestError.message);
    }
}   
fetchData();