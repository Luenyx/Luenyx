import { Immutable_Calendar_Unit } from "../base/immutable_calendar_unit.ts";
import { Mutable_Calendar_Unit } from "../base/mutable_calendar_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";

export class Immutable_Days extends Immutable_Calendar_Unit {
    public readonly type: string = "day" as const;

    public constructor(number: number) {super(number);}

    public as_mutable(): Mutable_Days {
        return new Mutable_Days(this.value);
    }
}

export class Mutable_Days extends Mutable_Calendar_Unit {
    public readonly type: string = "day" as const;

    public constructor(number: number) {super(number);}

    public as_immutable(): Immutable_Days {
        return new Immutable_Days(this.value);
    }
}

type Days_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Days;
    new(value: number, mutability: "mutable"): Mutable_Days;
};

export const Days = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Days(value) : 
        new Immutable_Days(value);
} as unknown as Days_Constructor;
