<script  runat="server">
  var skey = "abc123";        
  var prox = new Script.Util.WSProxy();
  
  // query all BUs
  var queryAllAccounts = true;

  // set the attributes to be retrieved
  // note Client.ID and not ClientID
  var cols = ["Status","Client.ID"];
  var filter = {
    Property: "SubscriberKey",
    SimpleOperator: "equals",
    Value: skey
  };

  // WSProxy retrieve
  var desc = prox.retrieve("Subscriber", cols, filter, queryAllAccounts);

  if (desc.Status == "OK") {
    // create array 
    var unsubBusinessUnits = [];
    for (var i=0; i<desc.Results.length; i++) {
      if (desc.Results[i].Status == "Unsubscribed") {
        // add any BU MIDs to an array for no particular reason
        unsubBusinessUnits.push(desc.Results[i].Client.ID);
      }
    }
  } else {
    // handle the error 
  }
</script>