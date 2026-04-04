export interface Mutable<Self_Immutable_Type> {
    readonly mutability: "mutable";
    as_immutable(): Self_Immutable_Type;
}
