<script runat="server">
Platform.Load("core","1.1.1");
try {
   var prox = new Script.Util.WSProxy();
   var cols = [
      "ImportDefinitionCustomerKey",
      "ImportType",
      "ImportStatus",
      "ID",
      "ObjectID",
      "NumberDuplicated",
      "NumberErrors",
      "NumberSuccessful",
      "DestinationID",
      "TaskResultID"
   ];
   var filter = {
      Property: "ImportDefinitionCustomerKey",
      SimpleOperator: "equals",
      Value: "D6473F2C-51C3-412A-8791-ED20F131C2C2"
   };

   var result = prox.retrieve("ImportResultsSummary", cols, filter);
   Write("result: " + Stringify(result));
} catch(ex) {
    Write("An error has occurred: " + Stringify(ex));
}
</script>