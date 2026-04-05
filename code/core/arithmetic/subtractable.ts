export interface Subtractable<Operand, Response> {
    subtract(request: { operand: Operand; } | { operands: Operand[]; }): Response;
}
