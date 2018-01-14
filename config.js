const contractAddress = '0x2c31e198dd09b949c7870c64d32ff9e45b91a328';
const abi = [
	{
		"constant": true,
		"inputs": [],
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
				"name": "publicKey",
				"type": "bytes32"
			}
		],
		"name": "getIdentity",
		"outputs": [
			{
				"components": [
					{
						"name": "fName",
						"type": "string"
					},
					{
						"name": "lName",
						"type": "string"
					},
					{
						"name": "addr",
						"type": "string"
					},
					{
						"name": "dob",
						"type": "string"
					},
					{
						"name": "ssn",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple"
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
		"constant": false,
		"inputs": [
			{
				"name": "privateKey",
				"type": "string"
			}
		],
		"name": "createReceiverKey",
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
	}
];