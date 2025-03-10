import { publicKey, struct, u64, u8, u32, array, vec } from "@project-serum/borsh";

const METRICS_LAYOUT = struct(
  [
    u64("feeTreasurySolTotal"),
    u64("feeValidationSolTotal"),
    u64("feeDeveloperSolTotal"),
    u64("stSolAppreciationTotal"),
    u64("feeTreasuryStSolTotal"),
    u64("feeValidationStSolTotal"),
    u64("feeDeveloperStSolTotal"),
    struct([array(u64(), 12, "counts"), u64("total")], "depositAmount"),
    struct([u64("totalStSolAmount"), u64("totalSolAmount"), u64("count")], "withdrawAmount"),
  ],
  "metrics"
);

/**
 * Layout of a single validator in Solido V1
 */
const VALIDATOR_LAYOUT_V1 = struct(
  [
    u64("feeCredit"),
    publicKey("feeAddress"),
    struct([u64("begin"), u64("end")], "stakeSeeds"),
    struct([u64("begin"), u64("end")], "unstakeSeeds"),
    u64("stakeAccountsBalance"),
    u64("unstakeAccountsBalance"),
    u8("active"),
  ],
  "entry"
);

/**
 * Layout of a single validator in Solido V2
 */
const VALIDATOR_LAYOUT_V2 = struct(
  [
    publicKey("voteAccountAddress"),
    struct([u64("begin"), u64("end")], "stakeSeeds"),
    struct([u64("begin"), u64("end")], "unstakeSeeds"),
    u64("stakeAccountsBalance"),
    u64("unstakeAccountsBalance"),
    u64("effectiveAccountsBalance"),
    u8("active"),
  ],
  "entry"
);

const VALIDATORS_ITEM_LAYOUT_V1 = struct([publicKey("pubkey"), VALIDATOR_LAYOUT_V1]);

const MAINTAINERS_ITEM_LAYOUT = struct([publicKey("pubkey")]);

export const LIDO_LAYOUT_V1 = struct([
  u8("lidoVersion"),
  publicKey("manager"),
  publicKey("stSolMint"),
  struct([u64("computedInEpoch"), u64("stSolSupply"), u64("solBalance")], "exchangeRate"),
  u8("solReserveAuthorityBumpSeed"),
  u8("stakeAuthorityBumpSeed"),
  u8("mintAuthorityBumpSeed"),
  u8("rewardsWithdrawAuthorityBumpSeed"),
  struct(
    [u32("treasuryFee"), u32("validationFee"), u32("developerFee"), u32("stSolAppreciation")],
    "rewardDistribution"
  ),
  struct([publicKey("treasuryAccount"), publicKey("developerAccount")], "feeRecipients"),
  METRICS_LAYOUT,
  struct([vec(VALIDATORS_ITEM_LAYOUT_V1, "entries"), u32("maximumEntries")], "validators"),
  struct([vec(MAINTAINERS_ITEM_LAYOUT, "entries"), u32("maximumEntries")], "maintainers"),
]);

export const LIDO_LAYOUT_V2 = struct([
  u8("accountType"),
  u8("lidoVersion"),
  publicKey("manager"),
  publicKey("stSolMint"),
  struct([u64("computedInEpoch"), u64("stSolSupply"), u64("solBalance")], "exchangeRate"),
  u8("solReserveAuthorityBumpSeed"),
  u8("stakeAuthorityBumpSeed"),
  u8("mintAuthorityBumpSeed"),
  struct([u32("treasuryFee"), u32("developerFee"), u32("stSolAppreciation")], "rewardDistribution"),
  struct([publicKey("treasuryAccount"), publicKey("developerAccount")], "feeRecipients"),
  METRICS_LAYOUT,
  publicKey("validatorList"),
  publicKey("maintainerList"),
  u8("maxCommissionPercentage"),
]);

export const VALIDATOR_LIST_ACCOUNT_LAYOUT = struct([
  u8("accountType"),
  u8("lidoVersion"),
  u32("maxEntries"),
  vec(VALIDATOR_LAYOUT_V2, "entries"),
]);

export const MAINTAINER_LIST_ACCOUNT_LAYOUT = struct([
  u8("accountType"),
  u8("lidoVersion"),
  u32("maxEntries"),
  vec(MAINTAINERS_ITEM_LAYOUT, "entries"),
]);

// A Layout to check if the account being used is a Lido v1 account or a Lido v2 account
export const LIDO_VERSION_CHECK_LAYOUT = struct([u8("maybeAccountType"), u8("maybeLidoVersion")]);
