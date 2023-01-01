import request from 'request';

export function getWeather(city: string) {
  request.get({
    url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
    headers: {
      'X-Api-Key': '7utyQFW3vlf0UMOaSzL1fQ==T552j4B9VArP1QLN'
    },
  }, function(error, response, body) {
    if(error) return console.error('Request failed:', error);
    else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    else console.log(body)
  });
}