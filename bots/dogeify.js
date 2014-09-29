var exec = require('child_process').exec;

module.exports = function(message, slackMetadata, callback) {
  if(message.indexOf('dogeify') == 0) {
    var toDogeify = message;
    if(toDogeify.indexOf('dogeify') == 0)
      toDogeify = toDogeify.substring(8);
    exec('ruby -e "require \'dogeify\'\n dogeifier = Dogeify.new\n puts dogeifier.process(\''+toDogeify+'\')"', function(err, stdout, stderr) {
      if(stdout.length > 0){
        callback({
          text: stdout.trim()
        });
      }
    });

  }
};
