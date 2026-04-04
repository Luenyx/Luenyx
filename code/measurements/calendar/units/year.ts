import { Immutable_Calendar_Unit } from "../base/immutable_calendar_unit.ts";
import { Mutable_Calendar_Unit } from "../base/mutable_calendar_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";

export class Immutable_Year extends Immutable_Calendar_Unit {
    public readonly type: string = "year" as const;

    public constructor(number: number) {super(number);}

    public as_mutable(): Mutable_Year {
        return new Mutable_Year(this.value);
    }
}

export class Mutable_Year extends Mutable_Calendar_Unit {
    public readonly type: string = "year" as const;

    public constructor(number: number) {super(number);}

    public as_immutable(): Immutable_Year {
        return new Immutable_Year(this.value);
    }
}

type Year_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Year;
    new(value: number, mutability: "mutable"): Mutable_Year;
};

export const Year = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Year(value) : 
        new Immutable_Year(value);
} as unknown as Year_Constructor;
