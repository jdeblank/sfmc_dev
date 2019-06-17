<script  runat="server">       

    var prox = new Script.Util.WSProxy();

    var tsdKey = '123';
    var EmailAddress = 'joe@email.com';

    var tsd = {
        TriggeredSendDefinition: {
            CustomerKey: tsdKey
        },
        Subscribers: [{
            EmailAddress: EmailAddress,
            SubscriberKey: EmailAddress,
            Attributes: [{
                Name: 'firstname',
                Value: 'John'
            }]
        }]
    };
    var res = prox.createItem('TriggeredSend', tsd);

    if (res.Status != "OK") {
        // yay
    } else {
        // boo
    }
        
</script>