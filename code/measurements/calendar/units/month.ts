import { Immutable_Calendar_Unit } from "../base/immutable_calendar_unit.ts";
import { Mutable_Calendar_Unit } from "../base/mutable_calendar_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";

export class Immutable_Month extends Immutable_Calendar_Unit {
    public readonly type: string = "month" as const;

    public constructor(number: number) {super(number);}

    public as_mutable(): Mutable_Month {
        return new Mutable_Month(this.value);
    }
}

export class Mutable_Month extends Mutable_Calendar_Unit {
    public readonly type: string = "month" as const;

    public constructor(number: number) {super(number);}

    public as_immutable(): Immutable_Month {
        return new Immutable_Month(this.value);
    }
}

type Month_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Month;
    new(value: number, mutability: "mutable"): Mutable_Month;
};

export const Month = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Month(value) : 
        new Immutable_Month(value);
} as unknown as Month_Constructor;
