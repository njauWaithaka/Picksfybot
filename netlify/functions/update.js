 console.log('now')
 exports.handler = async(event) => {
     console.log("Received an update from Telegram!", event.body);
     return { statusCode: 200 };
 };