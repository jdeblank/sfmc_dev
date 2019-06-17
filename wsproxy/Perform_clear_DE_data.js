 <script runat="server">
    Platform.Load("core","1.1.5");
    
    var prox = new Script.Util.WSProxy();    
    var action = "ClearData";
    var props = {
        CustomerKey: 'DEkey12345'
    };
    var opts = {};
    var data = prox.performItem("DataExtension", props, action, opts);
    Write("<br>result: " + Stringify(data));
</script>