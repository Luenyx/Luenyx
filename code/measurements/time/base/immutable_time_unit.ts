import { Time_Unit } from "./time_unit";
import type { Immutable } from "../../../core/mutability/immutable";
import type { Mutable_Time_Unit } from "./mutable_time_unit";

export abstract class Immutable_Time_Unit extends Time_Unit implements Immutable<Mutable_Time_Unit> {
    public readonly mutability = "immutable" as const;

    public abstract as_mutable(): Mutable_Time_Unit;
}
