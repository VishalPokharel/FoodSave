const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc-mumbai.maticvigil.com"
)

const contractAddress = "0x5382e5c568f349cbd9534686ffee3c148f8e7c16"

const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_type",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_discount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_discountedprice",
        type: "uint256",
      },
    ],
    name: "addSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_type",
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
        name: "_saleid",
        type: "uint256",
      },
    ],
    name: "removeSale",
    outputs: [],
    stateMutability: "nonpayable",
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
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
        ],
        internalType: "struct Agriculture.Food",
        name: "items",
        type: "tuple",
      },
      {
        internalType: "enum Agriculture.SaleType",
        name: "saletype",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "discount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "discountedprice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSales",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "quantity",
                type: "uint256",
              },
            ],
            internalType: "struct Agriculture.Food",
            name: "items",
            type: "tuple",
          },
          {
            internalType: "enum Agriculture.SaleType",
            name: "saletype",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "discount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discountedprice",
            type: "uint256",
          },
        ],
        internalType: "struct Agriculture.Sale[]",
        name: "",
        type: "tuple[]",
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

export const addUser = async (user) => {
  console.log(user)
  const txn = await contract.addUser(
    user.role,
    user.location,
    Number(user.phoneNumber)
  )
  return await txn.wait()
}

export const announceSale = async (
  name,
  quantity,
  SaleType,
  discount,
  discountedprice
) => {
  const set = await contract.addSale(
    name,
    quantity,
    SaleType,
    discount,
    discountedprice
  )
  console.log(set)
}

export const removeSale = async (saleId) => {
  const set = await contract.removeSale(saleId)
  console.log(set)
}

export const fetchSaleData = async () => {
  return await contract.totalSales()
}

export const generateQR = async (saleId) => {
  const data = await contract.getQR(saleId)
  return data
}

fetchSaleData()
