import { TransactionHandler } from "./TransactionHandler";
import * as evm from "./evm";
import * as oneinch from "./1inch";
import * as jupiter from "./jupiter";
import * as pumpfun from "./pumpfun";
import * as solana from "./solana";
import * as cetus from "./cetus";
import * as compound from "./compound";

export const handlerRegistry = new Map<string, TransactionHandler>();

handlerRegistry.set("evm/transfer", new evm.TransferHandler());
handlerRegistry.set("1inch/swap", new oneinch.SwapHandler());
handlerRegistry.set("jupiter/swap", new jupiter.SwapHandler());
handlerRegistry.set("pumpfun/launch", new pumpfun.PumpFunLaunchHandler());
handlerRegistry.set("solana/spl-create", new solana.SplCreateHandler());
handlerRegistry.set("cetus/swap", new cetus.SwapHandler());
handlerRegistry.set("compound/v2", new compound.CompoundV2Handler());
