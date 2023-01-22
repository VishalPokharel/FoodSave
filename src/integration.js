const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc-mumbai.maticvigil.com"
)

const contractAddress = "0x8Cff9475F2Da06c43D61afDa074A958264fd20A3"

const contractABI =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					}
				],
				"internalType": "struct Agriculture.Food",
				"name": "_items",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "_type",
				"type": "string"
			}
		],
		"name": "addSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_saleid",
				"type": "uint256"
			}
		],
		"name": "removeSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_saleid",
				"type": "uint256"
			}
		],
		"name": "getQR",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sales",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					}
				],
				"internalType": "struct Agriculture.Food",
				"name": "items",
				"type": "tuple"
			},
			{
				"internalType": "enum Agriculture.SaleType",
				"name": "saletype",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSales",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "quantity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							}
						],
						"internalType": "struct Agriculture.Food",
						"name": "items",
						"type": "tuple"
					},
					{
						"internalType": "enum Agriculture.SaleType",
						"name": "saletype",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct Agriculture.Sale[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const privateKey =
  "5162c1b5883c10dc4cd1f869010a5294b0f25fbd8481262a338355cb23c6e95b"
const wallet = new ethers.Wallet(privateKey, provider)
const signer = wallet.connect(provider)
const contract = new ethers.Contract(contractAddress, contractABI, signer)

export const addUser = async (id, name, type, location, number) => {
  const txn = await contract.addUser(id, name, type, location, number)
  console.log(await txn.wait())
}

export const announceSale = async (items, userId, SaleType) => {
  const set = await contract.addSale(items, userId, SaleType)
  console.log(set)
}

export const removeSale = async (saleId) => {
  const set = await contract.removeSale(saleId)
  console.log(set)
}

export const fetchSaleData = async () => {
  const data = await contract.totalSales()
  return [0,1,2,3]
}

export const generateQR = async (saleId) => {
  const data = await contract.getQR(saleId)
  console.log(data)
}
