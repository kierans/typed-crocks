import { UnaryFunction } from '../internal/index';
import Pair from '../Pair';

declare function State(val: (state: unknown) => Pair): State;

declare class State {
    map(fn: UnaryFunction): State;
    ap(val: State): State;
    chain(fn: UnaryFunction<State>): State;
    runWith(val: unknown): Pair;
    evalWith(val: unknown): any;
    execWith(val: unknown): any;
    static get(): State;
    static get(fn: UnaryFunction): State;
    static modify(fn: UnaryFunction): State;
    static put(val: unknown): State;
    static of(val: unknown): State;
}

export default State;
