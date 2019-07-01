<script runat="server">
    Platform.Load("core","1.1.5");
    var prox = new Script.Util.WSProxy();

    var cols = ["Name","CategoryID","TargetType","TargetUpdateType","DataExtensionTarget.Name"];
    var filter = {
        Property: "CustomerKey",
        SimpleOperator: "equals",
        Value: "abc123"
    };
    var data = prox.retrieve("QueryDefinition", cols)
    
    Write("Result: " + Stringify(data));
</script>