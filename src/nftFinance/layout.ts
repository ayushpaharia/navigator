import { publicKey, struct, u64, array, u8, vec } from "@project-serum/borsh";
// @ts-ignore
import { blob } from "buffer-layout";

export const RARITY_LAYOUT = struct([
  u64("discriminator"),
  publicKey("admin"),
  array(u8(), 16, "collection"),
  array(u8(), 16, "rarity"),
  vec(publicKey(), "mintList"),
]);

export const POOL_LAYOUT = struct([
  u64("discriminator"),
  publicKey("admin"),
  publicKey("proveTokenAuthority"),
  publicKey("proveTokenVault"),
  publicKey("proveTokenMint"),
  publicKey("rarityInfo"),
  u64("mintListLength"),
  u64("totalLocked"),
]);

export const NFT_VAULT_LAYOUT = struct([
  u64("discriminator"),
  publicKey("user"),
  publicKey("poolInfo"),
  publicKey("nftMint"),
]);

export const FARM_LAYOUT = struct([
  u64("discriminator"),
  publicKey("admin"),
  publicKey("proveTokenMint"),
  publicKey("rewardTokenMint"),
  publicKey("farmTokenMint"),
  publicKey("rewardVault"),
  publicKey("farmAuthority"),
  u8("farmAuthorityBump"),
  u64("rewardTokenPerSlot"),
  u64("totalProveTokenDeposited"),
]);

export const MINER_LAYOUT = struct([
  u64("discriminator"),
  publicKey("owner"),
  publicKey("farmInfo"),
  publicKey("minerVault"),
  u64("lastUpdateSlot"),
  u64("unclaimedAmount"),
  u64("depositedAmount"),
  u8("minerBump"),
]);
