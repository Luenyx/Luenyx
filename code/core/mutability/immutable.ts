export interface Immutable<Self_Mutable_Type> {
    readonly mutability: "immutable";
    as_mutable(): Self_Mutable_Type;
}
