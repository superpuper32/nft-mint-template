"use client";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { parseEther } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { NFT_ABI, NFT_CONTRACT } from "@/contracts/contracts";
import { useEffect } from "react";

export function MintSection() {
  const { address, isConnected } = useAccount();
  const { data: isSaleActive } = useReadContract({
    address: NFT_CONTRACT,
    abi: NFT_ABI,
    functionName: "saleIsActive",
  });
  const { writeContract, isPending } = useWriteContract();

  const handleMint = () => {
    writeContract({
      address: NFT_CONTRACT,
      abi: NFT_ABI,
      functionName: "mint",
      args: [BigInt(1)],
      value: parseEther("0.05"),
    });
  };

  useEffect(() => {
    console.log("Please connect your wallet to mint.", isSaleActive);
  }, [isSaleActive]);

  return (
    <div className="bg-white bg-gray-800 p-6 rounded-lg">
      {!isConnected ? (
        <ConnectButton />
      ) : (
        <button
          onClick={handleMint}
          disabled={isPending}
          className="bg-purple-600 px-4 py-2 rounded disabled:opacity-50"
        >
          {isPending ? "Minting..." : "Mint NFT (0.05 ETH)"}
        </button>
      )}
    </div>
  );
}
