const contractAddress = '0x3c16019880b78b556e7c54ee6d8aec4c5d2b864d';
const abi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "privateKey",
				"type": "string"
			}
		],
		"name": "getPublicKeys",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "privateKey",
				"type": "string"
			},
			{
				"name": "publicKey",
				"type": "bytes32"
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
				"name": "_address",
				"type": "string"
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
		"name": "createPublicKey",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
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
				"type": "string"
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
		"constant": false,
		"inputs": [
			{
				"name": "privateKey",
				"type": "string"
			},
			{
				"name": "publicKey",
				"type": "bytes32"
			}
		],
		"name": "sendIdentity",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];