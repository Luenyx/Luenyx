import { Calendar_Unit } from "./calendar_unit.ts";
import type { Mutable } from "../../../core/mutability/mutable.ts";
import type { Immutable_Calendar_Unit } from "./immutable_calendar_unit.ts";

export abstract class Mutable_Calendar_Unit extends Calendar_Unit implements Mutable<Immutable_Calendar_Unit> {
    public readonly mutability: "mutable" = "mutable" as const;

    public abstract as_immutable(): Immutable_Calendar_Unit;
}
