<script runat="server">
Platform.Load("core","1.1.1");

/*
    Example that handles JSON data POSTed to this page.
    e.g '{"firstname":"Joe","lastname":"Bloggs"}'
*/

var jsonpost, jsondata;

//Use JSON in post content
jsonpost = Platform.Request.GetPostData();

if (jsonpost.substring(0, 1) != '-') {
    // Parse JSON
    jsondata = Platform.Function.ParseJSON(jsonpost);
    var Firstname = jsondata.firstname;
    var LastName = jsondata.lastname;

    Write("Hello " + firstname + " " + lastname);
    // Hello Joe Bloggs
}

</script>