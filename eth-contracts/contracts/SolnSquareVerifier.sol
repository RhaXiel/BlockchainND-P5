pragma solidity 0.5.5;

import "./ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSqareVerifier is RealStateERC721Token{
    // TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    Verifier verifierContract;

    constructor(address verifierAddress, string memory name, string memory symbol, string memory baseTokenURI)
    RealStateERC721Token(name, symbol, baseTokenURI) public{
        verifierContract = Verifier(verifierAddress);
    }
    // TODO define a solutions struct that can hold an index & an address
    struct Solution{
        uint tokenId;
        address to;
    }

    // TODO define an array of the above struct
    Solution[] submittedSolutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) uniqueSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(
        address indexed to,
        uint indexed tokenId,
        bytes32 indexed key
    );

    // TODO Create a function to add the solutions to the array and emit the event
    function _addSolution(address to, uint tokenId, bytes32 key) internal{
        Solution memory _solution = Solution({tokenId: tokenId, to: to});
        submittedSolutions.push(_solution);
        uniqueSolutions[key] = _solution;
        emit SolutionAdded(to,  tokenId, key);
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintToken(address to, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public whenNotPaused
    {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(uniqueSolutions[key].to == address(0), "Solution is already used");
        require(verifierContract.verifyTx(a, b, c, input), "Solution is incorrect");
        _addSolution(to, tokenId, key);
        super.mint(to, tokenId);
    }

}

interface Verifier {
    function verifyTx(uint[2] calldata a, uint[2][2] calldata b, uint[2] calldata c, uint[2] calldata input) external
        returns(bool r);
}