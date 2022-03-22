import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import S3 from 'aws-sdk/clients/s3';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;

    const s3 = new S3();
    const bucket: string = 'iheart-bucket-henry-2022';
    const key: string = 'songData.json';
    const params: S3.Types.GetObjectRequest = {
        Bucket: bucket,
        Key: key,
    };

    try {
        const data = await s3.getObject(params).promise();
        const body = data.Body?.toString() ?? "";
        const content = JSON.parse(body);
        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "http://localhost:4000",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Credentials": "true"
            },
            body: JSON.stringify(body),
        };
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "http://localhost:4000",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Credentials": "true"
            },
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }

    return response;
};
