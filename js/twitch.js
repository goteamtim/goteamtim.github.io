var apiUrl = "https://api.twitch.tv/kraken/streams/",
    streamer = 'freecodecamp',
    constStreamersList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];



$.getJSON(apiUrl + streamer + '?callback=?', function(data) {
  console.log(data);
});