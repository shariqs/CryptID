const contractAddress = '0x29805f273ddbcac070a3771a8d264815976f8896';
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_lName",
				"type": "string"
			},
			{
				"name": "_addr",
				"type": "string"
			},
			{
				"name": "_dob",
				"type": "string"
			},
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "addIdentity",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "privateKey",
				"type": "string"
			}
		],
		"name": "createRecieverKey",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getIdentity",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "privateKey",
				"type": "string"
			}
		],
		"name": "createPublicKey",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "privateKey",
				"type": "address"
			}
		],
		"name": "identityAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "fName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "lName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "addr",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "dob",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "ssn",
				"type": "string"
			}
		],
		"name": "identityFound",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "publicKey",
				"type": "bytes32"
			}
		],
		"name": "publicKeyCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "recieverKey",
				"type": "bytes32"
			}
		],
		"name": "recieverKeyCreated",
		"type": "event"
	}
];