import { INgReduxProvider } from 'ng-redux';
import {counterReducer} from './counter.reducer';

export function configureStore() {
    return ($ngReduxProvider : INgReduxProvider) => {
        $ngReduxProvider.createStoreWith(counterReducer);
    }
}