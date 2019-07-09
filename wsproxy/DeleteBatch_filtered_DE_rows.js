<script runat="server">
Platform.Load("core","1");
var deCustKey = "45151BD5-F593-4B2D-8D10-AAAAAAAAAA";
var de = DataExtension.Init(deCustKey);
var filter = {Property:"Passenger",SimpleOperator:"greaterThan",Value:5};
var data = de.Rows.Retrieve(filter);
var objs = [];

for (var i=0; i<data.length; i++) {
  objs.push({
    CustomerKey: deCustKey,
    Keys: [{Name:"ID", Value:data[i].ID}]
  });
}

var prox = new Script.Util.WSProxy();
var res = prox.deleteBatch("DataExtensionObject", objs);

Write("<br><br>" + Stringify(res));
</script>