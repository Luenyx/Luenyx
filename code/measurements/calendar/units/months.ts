import { Immutable_Calendar_Unit } from "../base/immutable_calendar_unit.ts";
import { Mutable_Calendar_Unit } from "../base/mutable_calendar_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";

export class Immutable_Months extends Immutable_Calendar_Unit {
    public readonly type: "month" = "month" as const;

    public constructor(number: number) {super(number);}

    public as_mutable(): Mutable_Months {
        return new Mutable_Months(this.value);
    }
}

export class Mutable_Months extends Mutable_Calendar_Unit {
    public readonly type: "month" = "month" as const;

    public constructor(number: number) {super(number);}

    public as_immutable(): Immutable_Months {
        return new Immutable_Months(this.value);
    }
}

type Months_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Months;
    new(value: number, mutability: "mutable"): Mutable_Months;
};

export const Months = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Months(value) : 
        new Immutable_Months(value);
} as unknown as Months_Constructor;
