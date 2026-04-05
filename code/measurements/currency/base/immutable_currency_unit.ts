import { Currency_Unit } from "./currency_unit.ts";
import type { Immutable } from "../../../core/mutability/immutable.ts";
import type { Mutable_Currency_Unit } from "./mutable_currency_unit.ts";

export abstract class Immutable_Currency_Unit extends Currency_Unit implements Immutable<Mutable_Currency_Unit> {
    public readonly mutability = "immutable" as const;

    public abstract as_mutable(): Mutable_Currency_Unit;
}
