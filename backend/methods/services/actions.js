const https = require('https');
const { htmlReplacer } = require('./replacer')

module.exports.corpActions = (symbol)=>{
	return new Promise((resolve, reject)=>{
		var corpActionsUrl = `https://www1.nseindia.com/marketinfo/companyTracker/corpAction.jsp?symbol=${symbol}`
		https.get(corpActionsUrl, (resp) => {
        	let fin = "";
        	resp.on('data', chunk => {
                fin += chunk.toString()
                fin = htmlReplacer(fin)
            });
            resp.on('end',()=>{
            	let actions = []
            	let parts = fin.split("|")
            	for (let i=0;i<parts.length-1;i++){
            		var m = parts[i].match(/^(\d{2})-([A-z]{3})-(\d{4})$/);
            		if(m){
            			actions.push({
	            			date: parts[i],
	            			action: parts[i+3].trim()
	            		})
	            		i=i+4;
            		}
            	}
            	resolve({
            		actions: actions,
            		status: true
            	})
            })
    	}).on("error", (err) => {
            reject ({
                status: false,
                msg: err,
            });
        });
	})
}