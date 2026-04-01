interface Addable<Operand, Response> {
    add(request: { operand: Operand; } | { operands: Operand[]; }): Response;
}

interface Subtractable<Operand, Response> {
    subtract(request: { operand: Operand; } | { operands: Operand[]; }): Response;
}
