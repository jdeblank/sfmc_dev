Platform.Load("Core","1.1.1");

    var prox = new Script.Util.WSProxy();
    var name = "Retention_Testing";

    var de = {
        Name: name,
        CustomerKey: name,
        Description: "Retention_Testing",
        Fields: [{
            FieldType: "Text",
            Name: "Field1",
            MaxLength: 254,
            IsPrimaryKey: true,
            IsNillable: false,
            IsRequired: true
    },
    {
        FieldType: "Text",
        Name: "Field2",
        MaxLength: 254
    }],
    DataRetentionPeriodLength: 7,
    DataRetentionPeriod: "Days",
    RowBasedRetention: 0,
    ResetRetentionPeriodOnImport: 1,
    DeleteAtEndOfRetentionPeriod: 0
}

  var res = prox.createItem("DataExtension", de);