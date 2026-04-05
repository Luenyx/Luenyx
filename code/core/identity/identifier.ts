export type Identifier = `${string}-${string}-${string}-${string}-${string}`;

export function generate_identifier(): Identifier {
    return globalThis.crypto.randomUUID();
}
