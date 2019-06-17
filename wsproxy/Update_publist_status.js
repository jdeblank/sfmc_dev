<script runat="server">    
    Platform.Load("core","1.1.1");
    
    var subkey = "abc123";
    var email = "foo@bar.com"

    var prox = new Script.Util.WSProxy();

    // Set specific BU context if required
    // prox.setClientId({ "ID": 7279411 });

    var sub = {
        SubscriberKey: subkey,
        EmailAddress: email,
        Lists: [{
            ID: '12345',
            Status: 'Active'
        }]
    };
    var options = { 
        SaveOptions: [{
          PropertyName: "*",
          SaveAction: "UpdateAdd"
        }]
    };

    var resp = prox.updateItem("Subscriber", sub, options);
    
    Write("Response: " + Stringify(resp));
</script>