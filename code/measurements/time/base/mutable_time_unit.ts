import { Time_Unit } from "./time_unit.ts";
import type { Mutable } from "../../../core/mutability/mutable.ts";
import type { Immutable_Time_Unit } from "./immutable_time_unit.ts";

export abstract class Mutable_Time_Unit extends Time_Unit implements Mutable<Immutable_Time_Unit> {
    public readonly mutability = "mutable" as const;

    public abstract as_immutable(): Immutable_Time_Unit;
}
