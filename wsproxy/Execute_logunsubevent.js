<script runat="server">
Platform.Load("core","1.1.1");

var listid = 1234;
var jobid = 567;
var batchid = 1;

var mids = {
    BU1: 123456,
    BU2: 123457,
    BU3: 123458
};

// list of BUs names to unsubscribe
var SubsOptOut = ["BU1","BU3"];

var prox = new Script.Util.WSProxy();

// Update any unsubscribes
if (SubsOptOut.length) {
    for (var i=0; i<SubsOptOut.length; i++) {
        // switch BU contexts
        prox.setClientId({ "ID": mids[SubsOptOut[i]] });

        var props = [
            {Name:"SubscriberKey", Value:id},
            {Name:"JobID", Value:jobid},
            {Name:"ListID", Value:listid},
            {Name:"BatchID", Value:batchid},
            {Name:"Reason", Value:"A really good reason"}
        ];
        var data = prox.execute(props,"LogUnsubEvent");
        
        if (data.Results[0].StatusCode == 'OK') {
            // yay
        	Write("<br>" + SubsOptOut[i] + " Unsubscribe status:" + Stringify(data));
        } else {
        	// boo
        }
        
    }
    // reset BU context
    prox.resetClientIds();
}

</script>