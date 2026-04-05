import { Immutable_Currency_Unit } from "../../../base/immutable_currency_unit.ts";
import { Mutable_Currency_Unit } from "../../../base/mutable_currency_unit.ts";
import type { Mutability } from "../../../../../core/mutability/mutability.ts";

export class Immutable_Pound extends Immutable_Currency_Unit {
    public readonly type: string = "pound" as const;

    public constructor(value: number) {super(value);}

    public as_mutable(): Mutable_Pound {
        return new Mutable_Pound(this.value);
    }
}

export class Mutable_Pound extends Mutable_Currency_Unit {
    public readonly type: string = "pound" as const;

    public constructor(value: number) {super(value);}

    public as_immutable(): Immutable_Pound {
        return new Immutable_Pound(this.value);
    }
}

type Pound_Constructor = {
    new(value: number, mutability?: "immutable"): Immutable_Pound;
    new(value: number, mutability: "mutable"): Mutable_Pound;
};

export const Pound = function (this: unknown, value: number, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Pound(value) : 
        new Immutable_Pound(value);
} as unknown as Pound_Constructor;
