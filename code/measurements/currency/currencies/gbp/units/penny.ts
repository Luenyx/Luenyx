import { Immutable_Currency_Unit } from "../../../base/immutable_currency_unit.ts";
import { Mutable_Currency_Unit } from "../../../base/mutable_currency_unit.ts";
import type { Mutability } from "../../../../../core/mutability/mutability.ts";

export class Immutable_Penny extends Immutable_Currency_Unit {
    public readonly type: string = "penny" as const;

    public constructor(value: number) {super(value);}

    public as_mutable(): Mutable_Penny {
        return new Mutable_Penny(this.value);
    }
}

export class Mutable_Penny extends Mutable_Currency_Unit {
    public readonly type: string = "penny" as const;

    public constructor(value: number) {super(value);}

    public as_immutable(): Immutable_Penny {
        return new Immutable_Penny(this.value);
    }
}

type Penny_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Penny;
    new(value: number, mutability: "mutable"): Mutable_Penny;
};

export const Penny = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Penny(value) : 
        new Immutable_Penny(value);
} as unknown as Penny_Constructor;
