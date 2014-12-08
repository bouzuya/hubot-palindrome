# hubot-palindrome

A Hubot script for checking the palindrome

## Installation

    $ npm install https://github.com/bouzuya/hubot-palindrome/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-palindrome/archive/{VERSION}.tar.gz

## Example

    bouzuya> hubot palindrome ポツダム宣言大好き太郎
      hubot> ポツダム宣言大好き太郎 is invalid

    bouzuya> hubot palindrome しんぶんし
      hubot> しんぶんし is valid

## Configuration

See [`src/scripts/palindrome.coffee`](src/scripts/palindrome.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-palindrome
[travis-badge]: https://travis-ci.org/bouzuya/hubot-palindrome.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-palindrome
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-palindrome.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-palindrome
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-palindrome.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
