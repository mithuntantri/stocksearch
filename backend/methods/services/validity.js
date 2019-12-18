const https = require('https');

module.exports.checkSymbolValidity = (symbol)=>{
	return new Promise((resolve, reject)=>{
		var checkValidity = `https://www1.nseindia.com/companytracker/cmtracker.jsp?symbol=${symbol}&cName=cmtracker_nsedef.css`
		https.get(checkValidity, (resp) => {
        	let fin = "";
        	resp.on('data', chunk => {
                fin += chunk.toString()
            });
            resp.on('end',()=>{
            	resolve({
            		status: fin.includes("Market tracker is not available")?false:true
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
