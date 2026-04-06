import { Immutable_Currency_Unit } from "../../../base/immutable_currency_unit.ts";
import { Mutable_Currency_Unit } from "../../../base/mutable_currency_unit.ts";
import type { Mutability } from "../../../../../core/mutability/mutability.ts";

export class Immutable_Pounds extends Immutable_Currency_Unit {
    public readonly type: "pound" = "pound" as const;

    public constructor(value: number) {super(value);}

    public as_mutable(): Mutable_Pounds {
        return new Mutable_Pounds(this.value);
    }
}

export class Mutable_Pounds extends Mutable_Currency_Unit {
    public readonly type: "pound" = "pound" as const;

    public constructor(value: number) {super(value);}

    public as_immutable(): Immutable_Pounds {
        return new Immutable_Pounds(this.value);
    }
}

type Pounds_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Pounds;
    new(value: number, mutability: "mutable"): Mutable_Pounds;
};

export const Pounds = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Pounds(value) : 
        new Immutable_Pounds(value);
} as unknown as Pounds_Constructor;
