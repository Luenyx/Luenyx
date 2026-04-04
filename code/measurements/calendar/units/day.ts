import { Immutable_Calendar_Unit } from "../base/immutable_calendar_unit.ts";
import { Mutable_Calendar_Unit } from "../base/mutable_calendar_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";

export class Immutable_Day extends Immutable_Calendar_Unit {
    public readonly type: string = "day" as const;

    public constructor(number: number) {super(number);}

    public as_mutable(): Mutable_Day {
        return new Mutable_Day(this.value);
    }
}

export class Mutable_Day extends Mutable_Calendar_Unit {
    public readonly type: string = "day" as const;

    public constructor(number: number) {super(number);}

    public as_immutable(): Immutable_Day {
        return new Immutable_Day(this.value);
    }
}

type Day_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Day;
    new(value: number, mutability: "mutable"): Mutable_Day;
};

export const Day = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Day(value) : 
        new Immutable_Day(value);
} as unknown as Day_Constructor;
