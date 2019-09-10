<script runat="server">
    Platform.Load("core","1");
    var prox = new Script.Util.WSProxy();    
    
    var newFields = [{
        FieldType: "Text",
        Name: "newfield1",
        MaxLength:200,
        IsRequired: false
    },
    {
        FieldType: "Text",
        Name: "newfield2",
        MaxLength:200,
        IsRequired: false
    }];
  
	var props = { 
        CustomerKey: '111111-2222-3333-4444-555555555555',
    	Fields: newFields 
    };

	var data = prox.updateItem("DataExtension", props);

	Write(Stringify(data));
</script>