<script runat="server">
Platform.Load("core","1");
var de = DataExtension.Init("11111-22222-5555-aaa-bbb-ccc");
var filter = {Property:"FirstName",SimpleOperator:"equals",Value:"John"};
var data = de.Rows.Retrieve(filter);
var total;

for (var i=0; i<data.length; i++) {
  var result = deletedCustomerDE.Rows.Remove(["ContactID"], [data[i].ContactID]);
  total += result;

}
Write("Deleted: " + total)
</script>