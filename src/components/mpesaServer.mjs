import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all origins

const port = 3001; // You can change this port

const consumerKey = 'OawVikGcrc55N0ClAjeXR89K5LayEZgMgu1dt8rXY4ki99K9';
const consumerSecret = 'Bi3Yx23KGh8aJu4JWffYS9j0euPgwCnTAYogPskG1TO0gIftrc76W0DG3D0OVUz3';
const shortCode = '174379';
const lipaNaMpesaOnlineUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
const callbackUrl = 'https://example.com/callback'; // Replace this with a real callback URL when available

const getToken = async () => {
  const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  const response = await axios.get(url, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });
  return response.data.access_token;
};

app.post('/pay', async (req, res) => {
  let { phone, amount } = req.body;
  console.log('Received payment request for phone:', phone, 'and amount:', amount);

  // Ensure phone number is in the correct format
  if (phone.startsWith('0')) {
    phone = phone.replace('0', '254');
  }
  
  try {
    const token = await getToken();
    console.log('Received token:', token);
    
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');
    
    const payload = {
      BusinessShortCode: shortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone,
      PartyB: shortCode,
      PhoneNumber: phone,
      CallBackURL: callbackUrl,
      AccountReference: 'skywalkers',
      TransactionDesc: 'Payment for goods'
    };
    
    console.log('Payload:', payload);

    const response = await axios.post(lipaNaMpesaOnlineUrl, payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Payment response:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error initiating payment:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
