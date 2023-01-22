const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");

const contractAddress = "0x4715D4C91fa2283C632fbbF0C7173c8E7F89a37c";

const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new ethers.Contract(contractAddress, contractABI, provider);

const privateKey = "5162c1b5883c10dc4cd1f869010a5294b0f25fbd8481262a338355cb23c6e95b";
const wallet = new ethers.Wallet(privateKey, provider);
const signer = wallet.connect(provider);
const contractSigner = contract.connect(signer);

export const storeData = async(data)=>{
    console.log(data)

    const set = await contractSigner.store(data)
    console.log(set)
}

export const getData = async()=>{
    const data = await contract.retrieve()
    console.log(data)
    return data;
}
