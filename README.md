# stocksearch
A serverless application written in AWS Lambda to fetch stock related information, corporate actions & announcements directly from NSE India.

## Frontend
Written in Vue.js & hosted through an S3-Bucket

### Building 
```
cd client/
yarn install
yarn serve
```

### Live URL
`http://nse-corpactions.s3-website.ap-south-1.amazonaws.com`

## Backend
Written in Express.js & deployed via AWS Lambda fuction.

### Running Backend

```
cd backend/
npm install
sls offline start --stage dev --app nse --port 8090 --noTimeout
```

### Fetch URL

`/api/nsecorpactions/search?symbol=${symbol}`

### Prerequisites for Deployment
```
You need a proper AWS Account with cli-enable-credentials
Credentials should be added to `provider.dev.json` and `provider.prod.json`
```

##### Author: Mithun Tantri
