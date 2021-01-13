const AWS = require('aws-sdk');
const S3 = new AWS.S3();
exports.handler = async (_, context) => {
  try {
    const query = 'SELECT * FROM s3object;';
    const bucket = 'ihmsongdata';
    const key = 'songData.json';
    const params = {
      Bucket: bucket,
      Key: key,
      ExpressionType: 'SQL',
      Expression: query,
      InputSerialization: {
        JSON: {
          Type: 'DOCUMENT',
        }
      },
      OutputSerialization: {
        JSON: {
          RecordDelimiter: ','
        }
      }
    }
    const data = await getDataUsingS3Select(params);
    context.succeed(data);
  } catch (error) {
    context.fail(error);
  }
};

const getDataUsingS3Select = async (params) => {
  return new Promise((resolve, reject) => {
    S3.selectObjectContent(params, (err, data) => {
      if (err) { reject(err); }
      if (!data) {
        reject('Empty data object');
      }
      const records = []
      data.Payload.on('data', (event) => {
        if (event.Records) {
          records.push(event.Records.Payload);
        }
      })
      .on('error', (err) => {
        reject(err);
      })
      .on('end', () => {
        let planetString = Buffer.concat(records).toString('utf8');
        planetString = planetString.replace(/\,$/, '');
        planetString = `[${planetString}]`;
        try {
          const planetData = JSON.parse(planetString);
          resolve(planetData);
        } catch (e) {
          reject(new Error(`Unable to convert S3 data to JSON object. S3 Select Query: ${params.Expression}`));
        }
      });
    });
  })
}