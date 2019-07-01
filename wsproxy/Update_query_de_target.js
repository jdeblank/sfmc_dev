<script runat="server">
    Platform.Load("Core", "1.1.5");
    var prox = new Script.Util.WSProxy();
    var options = {SaveOptions: [{'PropertyName': '*', SaveAction: 'UpdateAdd'}]};

    // Note: you need to supply the ObjectID for the specific QueryDefinition object you are updating. 
    // The ObjectID is available by copying the URL to the Query Activity in the Activities tab 
    // within Automation studio interface. It's the GUID at the end of the URL.

    var data = {
        CustomerKey: "1111111-2222-3333-4444-5555555555",
        ObjectID: "aaaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeee",
        DataExtensionTarget: {
            Name: 'New DE target name'
        }
    };
    var desc = prox.updateItem("QueryDefinition", data, options);

    Write(Stringify(desc));
</script>