const axios = require('axios');
const cheerio = require('cheerio');

async function extract(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const title = $('title').text();
        const element = $('.wpfd-single-file--buttons');

        if (element.length > 0) {
            return [{ title: title, DownloadLink: element.find('a').attr('href') }];
        } else {
            const linkPromises = [];

            $('ol').each((index, element) => {
                $(element).find('a').each((i, anchor) => {
                    const link = $(anchor).attr('href');
                    const linkPromise = extractBulk(link);
                    linkPromises.push(linkPromise);
                });
            });

            const data = await Promise.all(linkPromises);
            return data;
        }
    } catch (error) {
        console.log('extractBulk:', error);
    }
}

async function extractBulk(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const title = $('title').text();
        const element = $('.wpfd-single-file--buttons');

        if (element.length > 0) {
            return { title: title, DownloadLink: element.find('a').attr('href') };
        }
    } catch (error) {
        console.log('extractBulk:', error);
    }
}

module.exports = extract;
