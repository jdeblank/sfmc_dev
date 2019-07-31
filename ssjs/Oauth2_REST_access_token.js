<script type="javascript" runat="server">
    Platform.Load("Core", "1");
    
    var base = 'https://YOURENDPOINT.auth.marketingcloudapis.com/'
    var url = base + 'v2/token';
    var contentType = 'application/json';
    
    var payload = {
        grant_type: "client_credentials",
        client_id: "YOURCLIENTID",
        client_secret: "YOURCLIENTSECRET"
    };
    
    try {
        var result = HTTP.Post(url, contentType, Stringify(payload));

        if (result["StatusCode"] == 200) {
            var response = Platform.Function.ParseJSON(result.Response[0]);
            var token = response.access_token;
            Write(token);
        }

    } catch (e) {
        Write("error: " + Stringify(e));
    }
 </script>