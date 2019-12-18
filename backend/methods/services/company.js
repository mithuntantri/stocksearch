const https = require('https');
const { htmlReplacer } = require('./replacer')

module.exports.compInfo = (symbol)=>{
	return new Promise((resolve, reject)=>{
		var compInfoUrl = `https://www1.nseindia.com/marketinfo/companyTracker/compInfo.jsp?symbol=${symbol}&series=EQ`
		https.get(compInfoUrl, (resp) => {
        	let fin = "";
        	resp.on('data', chunk => {
                fin += chunk.toString()
                fin = htmlReplacer(fin)
            });
            resp.on('end',()=>{
            	resolve({
            		symbol_name: fin.split("|")[0].trim(), 
            		listed_date: fin.split("|")[3].trim(),
            		face_value: fin.split("|")[5].trim(),
            		isin: fin.split("|")[7].trim(),
            		industry: fin.split("|")[9].trim(),
            		constituent_indices: fin.split("|")[11].trim(),
            		issued_cap: fin.split("|")[14].trim(),
            		free_float_mktcap: fin.split("|")[16].split("/>")[1].trim(),
            		impact_cost: fin.split("|")[18].trim(),
            		"52_week_high":  fin.split("|")[20].trim(),
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