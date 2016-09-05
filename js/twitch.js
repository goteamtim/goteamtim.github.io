var apiUrl = "https://api.twitch.tv/kraken/streams/",
  streamer = 'freecodecamp',
  streamerList = document.getElementById('twitchList'),
  constStreamersList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];



constStreamersList.forEach(function (streamer) {
  $.getJSON(apiUrl + streamer + '?callback=?', function (data) {
    var streamerDiv = document.createElement('li');
    if(data.stream === null){
      //User offline
      //add 'offline class to li element
      streamerDiv.className = 'offline';
      console.log('offline: ' + data);
      streamerDiv.innerHTML = streamer + ' is offline.';//Maybe take the user name and link to their profile.
      
    }else{
      //User online, addd that class to element to style it
      console.log('online: ' + data);
      streamerDiv.className = 'online';
      streamerDiv.innerHTML = 'Game: ' + data.stream.game;
      streamerDiv.innerHTML += '<img src=\'' + data.stream.channel.logo + '\' style=\'height:48px;width:48px;\'></img>';
    }
    streamerList.appendChild(streamerDiv);
  });
}, this);