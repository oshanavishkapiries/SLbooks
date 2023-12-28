const ppwikiExtractor = require('../modules/ppwiki_extractor');

const fileCon = async (req, res) => {
    
    // ?link=
    const linkParams = req.query.link;

  try{

   
    const data = await ppwikiExtractor(linkParams);
    res.send(data);
  

  } catch (error) {
    console.error('fileCon :', error.message);
  }
};

module.exports = {
  fileCon,
};
