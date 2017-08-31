import {module} from 'angular';
import {configureStore} from './state/configureStore';
import {INgRedux} from 'ng-redux';
import * as ngRedux from 'ng-redux';
// var ngRedux = require('ng-redux');

class CounterController {
    public static $inject = ['$ngRedux'];

    private state : ICounterState = {} as ICounterState;

    constructor($ngRedux : INgRedux) {
        $ngRedux.connect((state) => {
            return {count: state};
        }, {
            increment: () => ({type: 'INCREMENT'}),
            decrement: () => ({type: 'DECREMENT'})
        })(this.state);
    }

    public get count() {
        return this.state.count;
    }
}

module('app', [ngRedux])
    .config(configureStore())
    .component('counter', {
        template: `
            <div>
                <button ng-click='$ctrl.state.decrement()'>-</button>
                <span>{{$ctrl.count}}</span>
                <button ng-click='$ctrl.state.increment()'>+</button>
            </div>`,
        controller: CounterController
    });

interface ICounterState {
    count : number;
    increment();
    decrement();
}
