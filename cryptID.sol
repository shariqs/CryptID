pragma solidity ^0.4.18;


contract Owned {
    address owner;
    
    function Owned() public {
        owner = msg.sender;
    }
    
   modifier onlyOwner {
       require(msg.sender == owner);
       _;
   }
}

contract Identification is Owned{
    
    struct Identity {
        string fName;
        string lName;
        string addr;
        string dob;
        string ssn;
        bytes32[] publicKeys;
        mapping (string => bool) permissions;
    }
    
    
    mapping (string => Identity) identities;
    mapping (bytes32 => string) publicToPrivate;
    mapping (bytes32 => string) recieverToPublic;
      
    event identityAdded(string privateKey);
    event identityFound(string fName, string lName, string addr,string dob, string ssn);
    
    bytes32[] publicKeys ;
    function addIdentity(string _address, string _fName, string _lName, string _addr,string _dob, string _ssn) public {
        var identity = identities[_address];
        identity.fName = _fName;
        identity.lName = _lName;
        identity.addr = _addr;
        identity.dob = _dob;
        identity.ssn = _ssn;
        identityAdded(_address);
    }

    function createPublicKey(string privateKey) public returns (bytes32)  {
        uint random_number = uint(block.blockhash(block.number-1))%10 + 1;
        var publicKey = keccak256(random_number, privateKey);
        publicToPrivate[publicKey] = privateKey;
        identities[privateKey].publicKeys.push(publicKey);
        //publicKeys.push(publicKey) -1;
        return(publicKey);
    }
    

    
    function getPublicKeys(string privateKey) view public returns (bytes32[]){
         return identities[privateKey].publicKeys;
    }
    
    function getIdentity(string privateKey, bytes32 publicKey) view public returns (string, string, string, string, string) {
        var _address = publicToPrivate[publicKey];
        var theirPrivate = getPrivateKeyFromPublic(publicKey);
        if( identities[theirPrivate].permissions[privateKey] == true) {
            return (identities[_address].fName, identities[_address].lName, identities[_address].addr, identities[_address].dob, identities[_address].ssn);
        }else{
            return("a", "b", "c", "d", "e");
        }
        
        //identityFound("a", "b", "c", "d", "e");
        //return (identities[_address]);
        //return _address;
        //return (identities[_address].fName, identities[_address].lName, identities[_address].addr, identities[_address].dob, identities[_address].ssn);
    }
    
    function sendIdentity(string privateKey, bytes32 publicKey) public {
        var theirPrivate = getPrivateKeyFromPublic(publicKey);
        identities[theirPrivate].permissions[privateKey] = true;
        
    }
    
    function getPrivateKeyFromPublic(bytes32 publicKey) view private returns (string){
        return publicToPrivate[publicKey];
    }
    
 
    
    
}