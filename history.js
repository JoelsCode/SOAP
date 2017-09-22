var Twit = require('twit')
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);
var sentiment = require('sentiment');
var Twitter = require('node-tweet-stream')
var MY_SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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"; //#crawlerhistory webhooot
var T = new Twit({
    consumer_key: '3b4XJriTwy05rHvzpMhUvRyfM',
    consumer_secret: 'PdHAeFRYb8BGsRAyEaJ2YzWBlbaYvgTUHH4cWdCcZFuCMM0ciH',
    access_token: '102872969-0zLBdJ1Fuyv3BR3Q1cLY59L2bL3To6jUZPE7U1p3',
    access_token_secret: '2IgVnAGA7v9BWEVS6WUO23dedvEV8GMFCeaW4NfS4pkYw',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
})

//  retweet a tweet with id '343360866131001345'
//
T.post('statuses/retweet/:id', { id: '343360866131001345' }, function (err, data, response) {
    console.log(data)
  })


