const router = require('express').Router();
const axios = require('axios');
const { validateToken } = require('../middlewares/validateToken');

const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

router.get('/price', validateToken, async (_req, res) => {
  const result = await axios.get(ENDPOINTEXTERNALAPI);
  
  res.status(200).json(result.data);
});

module.exports = router;