// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BadgeNFT is ERC721, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("Learning Badge", "LBADGE") Ownable(msg.sender) {}

    function mint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _mint(to, tokenId);
    }
}
