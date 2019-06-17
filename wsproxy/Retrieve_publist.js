<script runat="server">
    Platform.Load("core","1.1.5");
    
    var prox = new Script.Util.WSProxy();
    var queryAllAccounts = true;
    var cols = ["Client.ID","CustomerKey","ListName","ID"];
    var filter = {
        Property: "ListClassification",
        SimpleOperator: "equals",
        Value: "PublicationList"
    };
    var desc = prox.retrieve("List", cols, filter, queryAllAccounts);

    Write(Stringify(desc));

</script>
