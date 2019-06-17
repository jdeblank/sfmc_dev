<script runat="server">
    Platform.Load("core","1.1.5");
    var prox = new Script.Util.WSProxy();
    var options = {SaveOptions: [{'PropertyName': '*', SaveAction: 'UpdateAdd'}]};
    var email = 'test@email.com';
    var subscriberkey = 'yourkey';

    function unsub(mid, listid) {
        prox.setClientId({ "ID": mid }); //This will switch BU contexts
        var props = { 
            SubscriberKey: subscriberkey,
            EmailAddress: email,
            Lists: [{
                ID: listid,
                Status: 'Unsubscribed'
            }]
        };
        var data = prox.updateItem("Subscriber", props, options);
        prox.resetClientIds(); //This will reset BU context

        return data.Results[0].StatusCode;
    }

    // Retrieve the publists
    var queryAllAccounts = true;
    var cols = ["Client.ID","CustomerKey","ListName","ID"];
    var filter = {
        Property: "ListClassification",
        SimpleOperator: "equals",
        Value: "PublicationList"
    };
    var publists = prox.retrieve("List", cols, filter, queryAllAccounts);
    Write(Stringify(publists.Results));

    for (var i=0; i<publists.Results.length; i++) {
        var result = unsub(publists.Results[i].Client.ID, publists.Results[i].ID);
        Write("<br>Result:" + result);
    }
</script>