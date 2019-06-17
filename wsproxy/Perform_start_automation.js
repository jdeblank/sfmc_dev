<script  runat="server">
    Platform.Load("core","1.1.1");
     
    var prox = new Script.Util.WSProxy();

    // Need to retrieve the ObjectID for the Automation, which isn't available via the SFMC interface.
    var cols = ["Name", "ProgramID", "IsActive"];
    var filter = {
        Property: "Name",
        SimpleOperator: "equals",
        Value: "API trigger test"
    };
    var desc = prox.retrieve("Automation", cols, filter);
    
    // Output ObjectID if you want to see it. 
    // Write('<br>ObjectID: ' + desc.Results[0].ObjectID);
            
    var props = {
        ObjectID: desc.Results[0].ObjectID
    };
    var action = "start";
    var opts = {};
    var res = prox.performItem("Automation", props, action, opts);
    var status = res.Status;
    var statusCode = res.Results[0].StatusCode;

    Write("status code: " + statusCode);

</script>