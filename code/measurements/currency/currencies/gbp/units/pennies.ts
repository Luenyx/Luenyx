import { Immutable_Currency_Unit } from "../../../base/immutable_currency_unit.ts";
import { Mutable_Currency_Unit } from "../../../base/mutable_currency_unit.ts";
import type { Mutability } from "../../../../../core/mutability/mutability.ts";

export class Immutable_Pennies extends Immutable_Currency_Unit {
    public readonly type: string = "penny" as const;

    public constructor(value: number) {super(value);}

    public as_mutable(): Mutable_Pennies {
        return new Mutable_Pennies(this.value);
    }
}

export class Mutable_Pennies extends Mutable_Currency_Unit {
    public readonly type: string = "penny" as const;

    public constructor(value: number) {super(value);}

    public as_immutable(): Immutable_Pennies {
        return new Immutable_Pennies(this.value);
    }
}

type Pennies_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Pennies;
    new(value: number, mutability: "mutable"): Mutable_Pennies;
};

export const Pennies = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Pennies(value) : 
        new Immutable_Pennies(value);
} as unknown as Pennies_Constructor;
