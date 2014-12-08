// Description
//   A Hubot script for checking the palindrome
//
// Configuration:
//   None
//
// Commands:
//   hubot palindrome <keyword> - check the palindrome
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.respond(/palindrome (\S+)$/i, function(res) {
    var keyword, result, reversed;
    keyword = res.match[1];
    reversed = keyword.split('').reverse().join('');
    result = keyword === reversed ? 'valid' : 'invalid';
    return res.send("" + keyword + " is " + result);
  });
};
