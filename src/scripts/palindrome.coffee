# Description
#   A Hubot script for checking the palindrome
#
# Configuration:
#   None
#
# Commands:
#   hubot palindrome <keyword> - check the palindrome
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.respond /palindrome (\S+)$/i, (res) ->
    keyword = res.match[1]
    reversed = keyword.split('').reverse().join('')
    result = if keyword is reversed then 'valid' else 'invalid'
    res.send "#{keyword} is #{result}"
