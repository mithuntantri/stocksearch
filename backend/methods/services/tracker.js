const https = require('https');

module.exports.trackSymbol = (symbol)=>{
	return new Promise((resolve, reject)=>{
		var checkValidity = `https://www1.nseindia.com/marketinfo/companyTracker/ajaxquote.jsp?symbol=${symbol}&series=EQ`
		https.get(checkValidity, (resp) => {
        	let fin = "";
        	resp.on('data', chunk => {
                fin += chunk.toString()
            });
            resp.on('end',()=>{
            	let parts = fin.split(";")[1].split(":")
            	resolve({
            		open: parts[9],
            		close: parts[8],
            		high: parts[10],
            		low: parts[11],
            		ltp: parts[13],
            		change: parts[15],
            		volume: parts[16],
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
