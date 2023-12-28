const pastpaperwiki = require('../web/ppwiki');

const homeCon = async (req, res) => {

  // ?search=&page=
  const searchParam = req.query.search || '';
  const pageParam = req.query.page || 1 ;

  try{

    const data = await pastpaperwiki(searchParam ,pageParam);
    res.send(data);
  

  } catch (error) {
    console.error('homeCon :', error.message);
  }
};

module.exports = {
  homeCon,
};
