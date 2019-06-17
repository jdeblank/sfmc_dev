<script  runat="server">
    Platform.Load("core","1.1.1");
    try {
        var de = DataExtension.Init('DE Name goes here');

        var data = {
            id: Request.GetFormField("id"),
            FirstName: Request.GetFormField("firstname"),
            Email: Request.GetFormField("email")
        }

        var result = de.Rows.Add(data);

        Write("Result: " + Stringify(result));
        
    } catch (ex) {
        Write("An error has occurred: " + Stringify(ex));
    }
</script>