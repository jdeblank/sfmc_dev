<script  runat="server">
    Platform.Load("core","1.1.1");
     
    var prox = new Script.Util.WSProxy();

    var guid = Platform.Function.GUID();
    
    /* Set ClientID */
    prox.setClientId({
        "ID": Platform.Function.AuthenticatedMemberID(),
        "UserID": Platform.Function.AuthenticatedEmployeeID()
    });
        
    /* Build automation and Query Object */
    var automation = {
        Name: 'Example Automation',
        CustomerKey: 'ExampleAutomation',
        Description: 'My Automation Example',
        AutomationTasks: [
            {
                Name: 'Task 1',
                Activities: [
                    {
                        ObjectID: guid,
                        Name: 'Query 1',
                        ActivityObject: {
                            "__Type__": "QueryDefinition",
                            ObjectID: guid,
                            Name: 'Example Query Activity',
                            CustomerKey: 'ExampleQueryActivity'
                        }
                    }
                ]
            }
        ],
        'AutomationType': 'Scheduled'
    };

    /* Create via API */
    var res = prox.createItem('Automation', automation);
    Write(Stringify(res));

</script>