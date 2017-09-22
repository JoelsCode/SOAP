var Twit = require('twit')

var MY_SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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"; //#crawlerhistory webhooot
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);

var Twit = new Twit({
    consumer_key: 'Kal8kSl4lGFsTbj8nHHTtCkQg',
    consumer_secret: 'XEwUdCEn5RvC43xubbe7FrIGW5fUDKMBjbA2d8Z3OCNWMXj6ue',
    access_token: '269905794-K9rJrVbTOENxf8m073PIWFG4slz6owlnYgpcJmi2',
    access_token_secret: 'xJAtj9noVWgjER7XeJxOKAM1kTnfYlpeHxsOXwTXRt7Io',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
})

var stream = Twit.stream('statuses/filter', { track: ["Addigy", "addigy", "jamf", "Jamf"], language: 'en' })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})
