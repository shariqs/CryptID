if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
   web3.eth.defaultAccount = web3.eth.accounts[0];
   var IDContract = web3.eth.contract(abi);

var ID = IDContract.at(contractAddress);
console.log(ID);

//var instructorEvent = ID.instructorInfo( {}, 'latest');
/**
var instructorEvent = ID.instructorInfo( {}, 'latest');
instructorEvent.watch(function (err, result) {
    if (!err) {
        if (result.blockHash != $("#instrans").html()) 
            $(".loader").hide();
            
        $("#insTrans").html('Block hash: ' +result.blockHash);
        $("#instructor").html(web3.toAscii(result.args.fName) + ' ' + web3.toAscii(result.args.lName) + ' (' + result.args.age + ' years old)');
    } else {
        $(".loader").hide();
    }
});
ID.countInstructors((err, res) => {
    if(res)
    $("#countIns").html(res.c + " Instructors");
})

$("#button").click(function() {
ID.setInstructor(web3.eth.defaultAccount,  $("#age").val(), $("#fName").val(),$("#lName").val(), (err, res) => {
    console.log(web3.eth.defaultAccount);
    if(err){
        $(".loader").hide();
    }
});
$(".loader").show();
});

**/

var identityAddedEvent = ID.identityAdded( {}, 'latest');
identityAddedEvent.watch(function (err, result) {
    $(".loader").hide();
    if (!err) {
        console.log(result.args.privateKey);
        $("#show-block-data").html("This is your private key. DO NOT LOSE IT!\n" + result.args.privateKey);
        $("#show-block-data").show();
    } else {
        console.log(err);
    }

    console.log("At least ran the code");
});


$("#register-button").click(function() {
    ID.addIdentity(web3.eth.defaultAccount, $("#fName").val(), $("#lName").val(),  $("#addr").val(),  $("#dob").val(),  $("#ssn").val(),   (err, res) => {
        if(err){
            $(".loader").hide();
        }
    });
    $(".loader").show();  
});

$("#lookup-button").click(function() {
    ID.getIdentity($("#private-key-in").val(),   (err, res) => {
        $(".loader").hide();
        if(res){
          console.log(res);
        }
        if(err){
            console.log(err);
        }
    });
    $(".loader").show();  
});

/**Code that creates a public Key
 *     ID.createPublicKey("0x29805f273ddbcac070a3771a8d264815976f8896" , (err, res) => {
        if(res){
            console.log(res);
          }
          if(err){
              console.log(err);
          }
    });
 * 
 */
