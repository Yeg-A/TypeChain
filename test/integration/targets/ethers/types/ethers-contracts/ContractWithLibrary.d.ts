/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";

interface ContractWithLibraryInterface extends Interface {
  functions: {
    val: TypedFunctionDescription<{ encode([]: []): string }>;

    setVal: TypedFunctionDescription<{ encode([_val]: [BigNumberish]): string }>;
  };

  events: {};
}

export class ContractWithLibrary extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ContractWithLibrary;
  attach(addressOrName: string): ContractWithLibrary;
  deployed(): Promise<ContractWithLibrary>;

  on(event: EventFilter | string, listener: Listener): ContractWithLibrary;
  once(event: EventFilter | string, listener: Listener): ContractWithLibrary;
  addListener(eventName: EventFilter | string, listener: Listener): ContractWithLibrary;
  removeAllListeners(eventName: EventFilter | string): ContractWithLibrary;
  removeListener(eventName: any, listener: Listener): ContractWithLibrary;

  interface: ContractWithLibraryInterface;

  functions: {
    val(): Promise<BigNumber>;

    setVal(_val: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
  };

  val(): Promise<BigNumber>;

  setVal(_val: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    val(): Promise<BigNumber>;

    setVal(_val: BigNumberish): Promise<BigNumber>;
  };
}