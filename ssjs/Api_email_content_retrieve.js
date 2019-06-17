<script runat="server">
Platform.Load("core","1.1.1");

// Example of HTTP GET/POST to SFMC REST API to retrieve HTML of an email 
try {

    var authBaseUrl = 'https://abcd.auth.marketingcloudapis.com';
    var authEndPoint = '/v1/requestToken';
    var restBaseUrl = 'https://abcd.rest.marketingcloudapis.com';
    
    var emailID = '12345'
    var assetEndPoint = '/asset/v1/content/assets/' + emailID + '/channelviews/html';

    var authObj = {};
    authObj.clientId = '1234foobar';
    authObj.clientSecret = 'baz56789';
    
    var contentType = 'application/json';

    var authReq = HTTP.Post(authBaseUrl + authEndPoint, contentType, Stringify(authObj));
    
    if (authReq.StatusCode == 200) {
        var tokenResponse = Platform.Function.ParseJSON(authReq.Response[0]);
        var accessToken = tokenResponse.accessToken;

        if (accessToken) {
            var assetReq = HTTP.Get(restBaseUrl+assetEndPoint, ['Authorization'],['Bearer '+ accessToken]);
            
            // zero means success
            if (assetReq.Status == 0) {
                var assetContent = Platform.Function.ParseJSON(assetReq.Content);
                // html of email
                var emailHtml = assetContent.compiled;
            }
        }
    } else {
        // error handling
    }

} catch (ex) {
Write("An error has occurred: " + Stringify(ex));
}
</script>
