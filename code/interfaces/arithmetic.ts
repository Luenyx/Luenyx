export interface Addable<Operand, Response> {
    add(request: { operand: Operand; } | { operands: Operand[]; }): Response;
}

export interface Subtractable<Operand, Response> {
    subtract(request: { operand: Operand; } | { operands: Operand[]; }): Response;
}
