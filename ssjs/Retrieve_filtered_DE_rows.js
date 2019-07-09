<script runat="server">
Platform.Load("core","1");
var deCustKey = "45151BD5-F593-4B2D-8D10-AAAAAAAAAA";
var de = DataExtension.Init(deCustKey);
var filter = {Property:"Passenger",SimpleOperator:"greaterThan",Value:5};
var data = de.Rows.Retrieve(filter);
</script>