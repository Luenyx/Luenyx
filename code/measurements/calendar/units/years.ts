import { Immutable_Calendar_Unit } from "../base/immutable_calendar_unit.ts";
import { Mutable_Calendar_Unit } from "../base/mutable_calendar_unit.ts";
import type { Mutability } from "../../../core/mutability/mutability.ts";

export class Immutable_Years extends Immutable_Calendar_Unit {
    public readonly type: "year" = "year" as const;

    public constructor(number: number) {super(number);}

    public as_mutable(): Mutable_Years {
        return new Mutable_Years(this.value);
    }
}

export class Mutable_Years extends Mutable_Calendar_Unit {
    public readonly type: "year" = "year" as const;

    public constructor(number: number) {super(number);}

    public as_immutable(): Immutable_Years {
        return new Immutable_Years(this.value);
    }
}

type Years_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Years;
    new(value: number, mutability: "mutable"): Mutable_Years;
};

export const Years = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Years(value) : 
        new Immutable_Years(value);
} as unknown as Years_Constructor;
