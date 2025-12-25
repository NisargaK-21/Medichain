// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MediChain {
    struct Record {
        string ipfsHash;    // Link to the actual encrypted file
        string doctorName;
        string diagnosis;
        uint256 date;
    }

    mapping(address => Record[]) private userRecords;

    // Add a record to the blockchain
    function addRecord(string memory _hash, string memory _doc, string memory _diag) public {
        userRecords[msg.sender].push(Record(_hash, _doc, _diag, block.timestamp));
    }

    // Get all records for the connected wallet
    function getMyRecords() public view returns (Record[] memory) {
        return userRecords[msg.sender];
    }
}