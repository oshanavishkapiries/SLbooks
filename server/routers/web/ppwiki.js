const axios = require('axios');
const cheerio = require('cheerio');


const web01Url =  'https://pastpapers.wiki/page/'
const quary01 = '/?s='

async function pastpaperwiki(search , page) {

  const url = web01Url + page + quary01 + search

  const data =  {
    keyword : '',
    page: '',
    result : '',
    link : [],
  }

  try {

   
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    data.keyword = search;
    data.page = parseInt(page);

    $('article').each((index, element) => {
      const item = {
        index: index + 1,
        title: $(element).find('a').text().replace(/\s*\(\)/, ''),
        description : $(element).find('p').text(),
        link: $(element).find('a').attr('href') ,
      }
      data.link.push(item);
    });

    
    $('.page_number').each((index, element) => {
      data.result = parseInt($(element).text()) * 10;
    });

    
  return data
    

  } catch (error) {
    console.error('Error in data extract :', error.message);
    console.log(url)
  }
}

module.exports = pastpaperwiki;