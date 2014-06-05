var Haxfred;

var haxfred_irc_greeting = function(haxfred) {
  Haxfred = haxfred;

  /* ----- Haxfred Listeners ----- */
  haxfred.on('irc.join', '', function(data, deferred) {

     if (haxfred.irc.client.nick !== data.from) {
        haxfred.irc.say('ITS A PARTY now that ' + data.from + ' is here!');
     }
    deferred.resolve();
  });
};

module.exports = haxfred_irc_greeting;
