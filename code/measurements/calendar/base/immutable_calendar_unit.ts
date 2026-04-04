import { Calendar_Unit } from "./calendar_unit.ts";
import type { Immutable } from "../../../core/mutability/immutable.ts";
import type { Mutable_Calendar_Unit } from "./mutable_calendar_unit.ts";

export abstract class Immutable_Calendar_Unit extends Calendar_Unit implements Immutable<Mutable_Calendar_Unit> {
    public readonly mutability = "immutable" as const;

    public abstract as_mutable(): Mutable_Calendar_Unit;
}
