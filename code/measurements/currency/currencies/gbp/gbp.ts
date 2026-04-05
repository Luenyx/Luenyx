import { Immutable } from "../../../../core/mutability/immutable.ts";
import { Immutable_Penny, Mutable_Penny } from "./units/penny.ts"
import { Immutable_Pound, Mutable_Pound } from "./units/pound.ts"
import { Mutable } from "../../../../core/mutability/mutable.ts";
import type { Mutability } from "../../../../core/mutability/mutability.ts";

type Gbp_Construction_Argument = {
    pennies?: number;
    pounds?: number;
};

export class Immutable_Gbp implements Immutable<Mutable_Gbp> {
    public readonly type: string = "gbp" as const;
    public readonly mutability: "immutable" = "immutable" as const;
    private readonly pennies: Immutable_Penny;
    private readonly pounds: Immutable_Pound;

    public constructor({ pennies, pounds }: Gbp_Construction_Argument) {
        this.pennies = new Immutable_Penny(pennies ?? 0);
        this.pounds = new Immutable_Pound(pounds ?? 0);
    }

    public as_mutable(): Mutable_Gbp {
        return new Mutable_Gbp({ pennies: this.pennies.value, pounds: this.pounds.value });
    }
}

export class Mutable_Gbp implements Mutable<Immutable_Gbp> {
    public readonly type: string = "gbp" as const;
    public readonly mutability: "mutable" = "mutable" as const;
    private readonly pennies: Mutable_Penny;
    private readonly pounds: Mutable_Pound;

    public constructor({ pennies, pounds }: Gbp_Construction_Argument) {
        this.pennies = new Mutable_Penny(pennies ?? 0);
        this.pounds = new Mutable_Pound(pounds ?? 0);
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
