const https = require('https');
const { htmlReplacer } = require('./replacer')

module.exports.corpAnnouncements = (symbol)=>{
	return new Promise((resolve, reject)=>{
		var corpAnnouncementsUrl = `https://www1.nseindia.com/marketinfo/companyTracker/corpAnnounce.jsp?symbol=${symbol}`
		https.get(corpAnnouncementsUrl, (resp) => {
        	let fin = "";
        	resp.on('data', chunk => {
                fin += chunk.toString()
                fin = htmlReplacer(fin)
            });
            resp.on('end',()=>{
            	let announcements = []
            	let parts = fin.split("|")
            	for (let i=0;i<parts.length-1;i++){
					parts[i] = parts[i].replace(/-/g, "").trim()
            		if(parts[i] != ""){
            			announcements.push({
            				"name": parts[i].split(">")[0].trim(),
            				"time": parts[i].split(">")[1].trim()
            			})
            		}
            	}
            	resolve({
            		announcements: announcements,
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
