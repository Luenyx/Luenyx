import { Currency_Unit } from "./currency_unit.ts";
import type { Mutable } from "../../../core/mutability/mutable.ts";
import type { Immutable_Currency_Unit } from "./immutable_currency_unit.ts";

export abstract class Mutable_Currency_Unit extends Currency_Unit implements Mutable<Immutable_Currency_Unit> {
    public readonly mutability = "mutable" as const;

    public abstract as_immutable(): Immutable_Currency_Unit;
}
