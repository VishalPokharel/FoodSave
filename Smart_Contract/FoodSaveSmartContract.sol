//store the information provided by the retailer 

//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Agriculture{

    struct Food 
    {
    string name;
    uint256 quantity;

    }

    enum Types{
        RETAILER, CONSUMER
    }

    enum SaleType{
        HOTEL, RESTAURANT, MART, EVENT
    }

    struct Sale {
        uint id;
        Food items;
        SaleType saletype;
        bool isActive;
        uint discount;
        uint discountedprice;
    }

    struct User{
        uint256 id;
        Types UserType;
        string location;
        uint256 phone;
    }

    User[] private users;
    Sale[] public sales;


    function addUser( string memory _type, string memory _location, uint256 _number)public {
        uint256 _id=users.length;
        if(keccak256(abi.encodePacked(_type)) == keccak256(abi.encodePacked("RETAILER")))
        {
            users.push(User(_id, Types.RETAILER, _location, _number));
        }
        else{
             users.push(User(_id, Types.CONSUMER, _location, _number));
        }        
    }

    function addSale(string memory _name,uint256 _quantity, string memory _type,uint _discount, uint _discountedprice) public {
        uint256 _id = sales.length;
        SaleType Stype = SaleType.HOTEL;

        if(keccak256(abi.encodePacked(_type)) == keccak256(abi.encodePacked("RESTAURANT"))){
            Stype = SaleType.RESTAURANT;
        }  
        else if(keccak256(abi.encodePacked(_type)) == keccak256(abi.encodePacked("MART"))){
            Stype = SaleType.MART;
        } 
        else if(keccak256(abi.encodePacked(_type)) == keccak256(abi.encodePacked("EVENT"))){
             Stype = SaleType.EVENT;
        } 
        sales.push(Sale(_id, Food(_name,_quantity), Stype, true,_discount,_discountedprice));
    }

    function removeSale(uint256 _saleid) external {
        for (uint256 i =0; i<sales.length;i++){
            if(_saleid==sales[i].id){
                sales[i].isActive=false;
            }
        }
    }

    function totalSales() public view returns(Sale[] memory) {
        return sales;
    }


    function random(uint _saleid) internal view returns(bytes32){
        return keccak256(abi.encodePacked(_saleid, msg.sender));
    }

    function getQR(uint _saleid) external view returns(bytes32){
        require(sales[_saleid].isActive, "sale not active");
        return random(_saleid);
    }
}


