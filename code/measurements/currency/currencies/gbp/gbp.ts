import { Immutable } from "../../../../core/mutability/immutable.ts";
import { Immutable_Pennies, Mutable_Pennies } from "./units/pennies.ts"
import { Immutable_Pounds, Mutable_Pounds } from "./units/pounds.ts"
import { Mutable } from "../../../../core/mutability/mutable.ts";
import type { Mutability } from "../../../../core/mutability/mutability.ts";

type Gbp_Construction_Argument = {
    pennies?: number;
    pounds?: number;
};

export class Immutable_Gbp implements Immutable<Mutable_Gbp> {
    public readonly type: "gbp" = "gbp" as const;
    public readonly mutability: "immutable" = "immutable" as const;
    private readonly pennies: Immutable_Pennies;
    private readonly pounds: Immutable_Pounds;

    public constructor({ pennies, pounds }: Gbp_Construction_Argument) {
        this.pennies = new Immutable_Pennies(pennies ?? 0);
        this.pounds = new Immutable_Pounds(pounds ?? 0);
    }

    public as_mutable(): Mutable_Gbp {
        return new Mutable_Gbp({ pennies: this.pennies.value, pounds: this.pounds.value });
    }
}

export class Mutable_Gbp implements Mutable<Immutable_Gbp> {
    public readonly type: "gbp" = "gbp" as const;
    public readonly mutability: "mutable" = "mutable" as const;
    private readonly pennies: Mutable_Pennies;
    private readonly pounds: Mutable_Pounds;

    public constructor({ pennies, pounds }: Gbp_Construction_Argument) {
        this.pennies = new Mutable_Pennies(pennies ?? 0);
        this.pounds = new Mutable_Pounds(pounds ?? 0);
    }

    public as_immutable(): Immutable_Gbp {
        return new Immutable_Gbp({ pennies: this.pennies.value, pounds: this.pounds.value });
    }
}

type Gbp_Constructor = {
    new(argument: Gbp_Construction_Argument, mutability?: "immutable"): Immutable_Gbp;
    new(argument: Gbp_Construction_Argument, mutability: "mutable"): Mutable_Gbp;
};

export const Gbp = function (this: unknown, argument: Gbp_Construction_Argument, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Gbp(argument) : 
        new Immutable_Gbp(argument);
} as unknown as Gbp_Constructor;
