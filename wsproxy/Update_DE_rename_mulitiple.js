<script runat="server">
    Platform.Load("core","1.1.5");
    var prox = new Script.Util.WSProxy();    

    var des = ['DEName0','DEName1','DEName2'];
    var newNames = ['NewDEName0','NewDEName1','NewDEName2'];

    for (var i=0; i<des.length; i++) {
        var filter = {
            Property: "Name",
            SimpleOperator: "equals",
            Value: des[i]
        };
        // Retrieve DE Customer Keys
        var data = prox.retrieve("DataExtension", ["CustomerKey"], filter);
        Write("<br>DE key: " + data.Results[0].CustomerKey);
        var de = {
            CustomerKey: data.Results[0].CustomerKey,
            Name: newNames[i]
        };
        //Update DE Name
        var resp = prox.updateItem("DataExtension", de);
        Write("<br>Response: " + resp.Results[0].StatusMessage);
    }
</script>