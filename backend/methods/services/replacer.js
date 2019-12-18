module.exports.htmlReplacer = (html) =>{
	try{
		if(html.includes("<TABLE cellspacing=0 border=0 cellpadding=0 bgcolor=#ffffff>")){
			html = html.split("<TABLE cellspacing=0 border=0 cellpadding=0 bgcolor=#ffffff>")[1].trim()			
		}else{
			html = html.split("<TABLE cellspacing=0 border=0 cellpadding=0 bgcolor=#ffffff width=100% >")[1].trim()			
		}
		if(html.includes("<td class='t00_left'>")){
			html = html.split("<td class='t00_left'>")[1].trim()
		}

		html = html.replace(/&nbsp;/g, "")
		html = html.replace(/"/g, "")
		html = html.replace(/'/g, "")
		html = html.replace(/<tr\svalign[=]top>/g, "")

		if(html.includes("<td class=t00CA_left>")){
			html = html.replace(/t00CA_left/g, "")
			html = html.replace(/<td\snowrap>/g, "")
			html = html.replace(/<td\sclass[=]>/g, "")
		}
		if(html.includes("a href")){
			html = html.replace(/<a\shref(.*)menubar[=]no\)/g, "")
			html = html.replace(/<\/a>/g, "")
		}
		html = html.replace(/<center>/g, "")
		html = html.replace(/<\/center>/g, "")
		html = html.replace(/<nobr>/g, "")
		html = html.replace(/<\/nobr>/g, "")
		html = html.replace(/<tr>/g, "")
		html = html.replace(/<tr height=10>/g, "")
		html = html.replace(/<td>/g, "")
		html = html.replace(/<b>/g, "")
		html = html.replace(/<\/tr>/g, "")
		html = html.replace(/<\/td>/g, "|")
		html = html.replace(/<\/b>/g, "|")
		html = html.replace(/:/g, "")
		html = html.replace(/\n/g, "")
		html = html.replace(/  /g, "")
		return html
	}catch(e){
		console.log(e)
		return html
	}
}