import { ActionReducer } from '../models';
export declare function immutabilityCheckMetaReducer(reducer: ActionReducer<any, any>, checks: {
    action: boolean;
    state: boolean;
}): ActionReducer<any, any>;
