var Twit = require('twit')
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);
var sentiment = require('sentiment');
var Twitter = require('node-tweet-stream')
var MY_SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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"; //#crawlerhistory webhooot


var tstream = new Twitter({
    consumer_key: 'Kal8kSl4lGFsTbj8nHHTtCkQg',
    consumer_secret: 'XEwUdCEn5RvC43xubbe7FrIGW5fUDKMBjbA2d8Z3OCNWMXj6ue',
    token: '269905794-K9rJrVbTOENxf8m073PIWFG4slz6owlnYgpcJmi2',
    token_secret: 'xJAtj9noVWgjER7XeJxOKAM1kTnfYlpeHxsOXwTXRt7Io'
})
tstream.trackMultiple(["MacOS"]);

tstream.on("tweet",function(tweet){
    
    var tweetInfo = {
        name: tweet.user.name,
        text: tweet.text,
        location: tweet.user.location,
        sentiment: sentiment(tweet.text).score,
        user_id: tweet.user.id_str,
        tweet_id: tweet.id_str,
        url: tweet.user.url,
        description: tweet.user.description,
        followers: tweet.user.followers_count,
        friends: tweet.user.friends_count, 
        difference: tweet.user.followers_count-tweet.user.friends_count,
        ratio: tweet.user.followers_count/tweet.user.friends_count,
        screen_name: tweet.user.screen_name,
        profileURL: "https://twitter.com/" + tweet.user.screen_name,
    }

    console.log(tweetInfo);
})
