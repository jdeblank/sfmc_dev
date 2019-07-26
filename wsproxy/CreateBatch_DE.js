<script runat=server>
    Platform.Load("Core", "1");

    var prox = new Script.Util.WSProxy();
    var name = ["deRed", "deGreen", "deBlue"];
    var desc = ["descRed", "descGreen", "descBlue"];
    var objs = [];

    for (var i = 0; i < name.length; i++) {
        var somethingDynamic = {
            Name: name[i],
            CustomerKey: name[i],
            Description: desc[i],
            Fields: [{
                    FieldType: "Text",
                    Name: "SubscriberKey",
                    MaxLength: 254,
                    IsPrimaryKey: true,
                    IsNillable: false,
                    IsRequired: true
                },
                {
                    FieldType: "EmailAddress",
                    Name: "EmailAddress",
                    IsNillable: false,
                    IsRequired: true
                }
            ],
            CategoryID: 14486
        }

        objs.push(somethingDynamic);
    }

    var res = prox.createBatch("DataExtension", objs);
</script>