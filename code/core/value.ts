import type { Mutability } from "./mutability/mutability.ts";

export abstract class Value {
    public abstract readonly type: string;
    public abstract readonly mutability: Mutability;
    public readonly value: number;

    protected constructor(value?: number) {
        this.value = value ?? 0;
    }
}
