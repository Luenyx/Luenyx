export interface Addable<Operand, Response> {
    add(request: { operand: Operand; } | { operands: Operand[]; }): Response;
}
