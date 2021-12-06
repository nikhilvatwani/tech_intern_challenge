// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
const fs = require("fs");
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        try {
          const jsonString = fs.readFileSync("./resources/songData.json");
          const songData = JSON.parse(jsonString);
          response = {
                      'statusCode': 200,
                      headers: {
                          'Access-Control-Allow-Origin': 'http://localhost:3000'
                        },
                      'body': JSON.stringify({
                          message: songData,
                          // location: ret.data.trim()
                      })
                  }
        } catch (err) {
          console.log(err);
          return;
        }

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
