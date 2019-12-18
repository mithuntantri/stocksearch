const { buildSuccessResponse, buildErrorResponse} = require('../lib/buildResponse')
const { compInfo } = require('../services/company')
const { corpActions } = require('../services/actions')
const { corpAnnouncements } = require('../services/announcements')
const { checkSymbolValidity } = require('../services/validity')
const { trackSymbol } = require('../services/tracker')

module.exports.scrapeNSE = async (event, context) => {
    try {
    	let symbol = event.queryStringParameters.symbol

    	var validity = await checkSymbolValidity(symbol)

    	if(validity.status){
    		var compInfoResult = await compInfo(symbol)
	    	var corpActionsResult = await corpActions(symbol)
	    	var corpAnnouncementsResult = await corpAnnouncements(symbol)
            var trackSymbolResult = await trackSymbol(symbol)
	        return buildSuccessResponse({
	        	'corpinfo':compInfoResult, 
	        	'corpactions': corpActionsResult, 
	        	'corpannouncements': corpAnnouncementsResult,
                'tracker': trackSymbolResult,
	        })   
	         		
    	}else{
    		return buildSuccessResponse({
    			'message': 'Market Tracker not available for this symbol.'
    		})
    	}

    }catch(e){
        return buildErrorResponse(e, event)
    }

}


