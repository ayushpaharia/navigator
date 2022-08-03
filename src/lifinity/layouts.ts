import {
  publicKey,
  struct,
  u64,
  u128,
  u8,
  bool,
  u16,
  i64,
} from "@project-serum/borsh";

export const LIFINITY_AMM_LAYOUT = struct([
  u64("index"),
  publicKey("initializerKey"),
  publicKey("initializerDepositTokenAccount"),
  publicKey("initializerReceiveTokenAccount"),
  u64("initializerAmount"),
  u64("takerAmount"),
  u8("initialized"),
  u8("bumpSeed"),
  u8("freezeTrade"),
  u8("freezeDeposit"),
  u8("freezeWithdraw"),
  u8("baseDecimals"),
  publicKey("tokenProgramId"),
  publicKey("tokenAAccount"),
  publicKey("tokenBAccount"),
  publicKey("poolMint"),
  publicKey("tokenAMint"),
  publicKey("tokenBMint"),
  publicKey("poolFeeAccount"),
  publicKey("pythAccount"),
  publicKey("pythPcAccount"),
  publicKey("configAccount"),
  publicKey("ammTemp1"),
  publicKey("ammTemp2"),
  publicKey("ammTemp3"),
  u64("tradeFeeNumerator"),
  u64("tradeFeeDenominator"),
  u64("ownerTradeFeeNumerator"),
  u64("ownerTradeFeeDenominator"),
  u64("ownerWithdrawFeeNumerator"),
  u64("ownerWithdrawFeeDenominator"),
  u64("hostFeeNumerator"),
  u64("hostFeeDenominator"),
  u8("curveType"),
  u64("curveParameters"),
]);

export const CONFIG_LAYOUT = struct([
  u64("index"),
  u64("concentrationRatio"),
  u64("lastPrice"),
  u64("adjustRatio"),
  u64("balanceRatio"),
  u64("lastBalancedPrice"),
  u64("configDenominator"),
  u64("pythConfidenceLimit"),
  u64("pythSlotLimit"),
  u64("volumeX"),
  u64("volumeY"),
  u64("volumeXinY"),
  u64("coefficientUp"),
  u64("coefficientDown"),
  u64("oracleStatus"),
  u64("configTemp1"),
  u64("configTemp2"),
]);
