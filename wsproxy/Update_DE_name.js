<script runat="server">
    Platform.Load("core","1.1.5");
    var prox = new Script.Util.WSProxy();    
    var de = {
        CustomerKey: '111111-2222-3333-4444-555555555555',
        Name: 'New DE Name'
    };
    var resp = prox.updateItem("DataExtension", de);
    Write("<br>Response: " + resp.Results[0].StatusMessage);
</script>