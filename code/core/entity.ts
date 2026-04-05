import type { Mutability } from "./mutability/mutability.ts";
import { generate_identifier, type Identifier } from "./identity/identifier.ts";

export abstract class Entity {
    public abstract readonly type: string;
    public abstract readonly mutability: Mutability;
    public readonly identifier: Identifier;

    protected constructor(identifier?: Identifier) {
        this.identifier = identifier ?? generate_identifier();
    }
}
