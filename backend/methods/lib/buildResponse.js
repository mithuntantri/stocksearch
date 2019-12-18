const buildSuccessResponse= async (data, dataKey = 'data')=>{
    return({
            'statusCode' : 200,
            'body'       : JSON.stringify({status : true, msg : 'Execution Successful ', [dataKey]:data}),
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials":"true",
                "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
            }
    })
}

const buildErrorResponse= async (error,event,msg="Error could not complete the operation")=>{
    if(error && error.stack){
        return({
            'statusCode' : 400,
            'body'       : JSON.stringify({status : false, msg, err:error.stack}),
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials":"true",
                "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
            }
        })
    }else{
        return({
            'statusCode' : 400,
            'body'       : JSON.stringify({status : false, msg, err:error}),
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials":"true",
                "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
            }
        })
    }
}

module.exports = {
    buildSuccessResponse,
    buildErrorResponse
}