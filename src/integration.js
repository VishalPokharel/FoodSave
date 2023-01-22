const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc-mumbai.maticvigil.com"
)

const contractAddress = "0xFc0eEDcE3A0b2837d18Cb90f59d4c5Cc1f6ce9E4"

const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_memberId",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "enum Agriculture.Types",
            name: "UserType",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "phone",
            type: "uint256",
          },
        ],
        internalType: "struct Agriculture.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_saleid",
        type: "uint256",
      },
    ],
    name: "getQR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sales",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "enum Agriculture.SaleType",
        name: "saletype",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]

const privateKey =
  "5162c1b5883c10dc4cd1f869010a5294b0f25fbd8481262a338355cb23c6e95b"
const wallet = new ethers.Wallet(privateKey, provider)
const signer = wallet.connect(provider)
const contract = new ethers.Contract(contractAddress, contractABI, signer)

export const addUser = async (id, name, location, number) => {
  const txn = await contract.addUser(id, name, location, number)
  console.log(await txn.wait())
}

export const announceSale = async (items, userId, SaleType) => {
  const set = await contract.addSale(items, userId, SaleType)
  console.log(set)
}
export const fetchActiveSale = async () => {
  const set = await contract.fetchActiveSale()
  console.log(set)
}

export const fetchSaleData = async () => {
  const data = await contract.fetchSaleData()
  console.log(data)
}

export const generateQR = async (saleId) => {
  const data = await contract.fetchSaleData()
  console.log(data)
}
