
<script runat="server">
    Platform.Load("core","1.1.5");
    
    var id1 = "foobarba@email.com";
    var id2 = "foobar";
    var id3 = "0036F00001zNm0BQAS";

    var lookup5bin = {
        '00000':'A', '01000':'I', '10000':'Q', '11000':'Y',
        '00001':'B', '01001':'J', '10001':'R', '11001':'Z',
        '00010':'C', '01010':'K', '10010':'S', '11010':'0',
        '00011':'D', '01011':'L', '10011':'T', '11011':'1',
        '00100':'E', '01100':'M', '10100':'U', '11100':'2',
        '00101':'F', '01101':'N', '10101':'V', '11101':'3',
        '00110':'G', '01110':'O', '10110':'W', '11110':'4',
        '00111':'H', '01111':'P', '10111':'X', '11111':'5'
    };

    function alphaToBin(str) {
        // Convert single uppercase alpha char to binary
        var rx = new RegExp('[A-Z]');
        return rx.test(str) === true ? 1 : 0;
    }
    function reverseString(str) {
        // Reverse a string
        // Note split('') doesn't work in SSJS
        return str.substring(4,5)+
                str.substring(3,4)+
                str.substring(2,3)+
                str.substring(1,2)+
                str.substring(0,1);
    }
    function pieceChecksum(str) {
        var bin = '';
        for (var i = 0; i < str.length; i++) {
            bin += alphaToBin(str.substring(i,i+1));
        }
        return lookup5bin[bin];
    }

    function sfdc15To18(str) {
        // There is an Ampscript function to convert from 15 to 18, but I thought it'd be fun to write in JS.
        var piece1 = reverseString(str.substring(0,5));
        var piece2 = reverseString(str.substring(5,10));
        var piece3 = reverseString(str.substring(10,15));

        return str + pieceChecksum(piece1) + pieceChecksum(piece2) + pieceChecksum(piece3);
    }

    function sfIdConfirm(str) {
        // Confirms an 18 char string is an SFDC ID
        if (str.length == 18) {
            return str === sfdc15To18(str.substring(0,15)) ? true : false;
        } else {
            return false;
        }
    }

    Write(id1 + ": " + sfIdConfirm(id1) + "<br>");
    Write(id2 + ": " + sfIdConfirm(id2) + "<br>");
    Write(id3 + ": " + sfIdConfirm(id3) + "<br>");

    // Inspriation credit: https://astadiaemea.wordpress.com/2010/06/21/15-or-18-character-ids-in-salesforce-com-%E2%80%93-do-you-know-how-useful-unique-ids-are-to-your-development-effort/

</script>
