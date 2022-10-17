const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=988f2a988ba10b06bcf8a6ac2c73466b&query=" +
    encodeURIComponent(address);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error || body.data.length === 0) {
      callback("Unable to find location period, try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geoCode;
