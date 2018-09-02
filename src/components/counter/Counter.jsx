import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment, decrement} from '../../actions/counterActions';

export class Counter extends PureComponent {

    constructor() {
        super();
    }

    render() {
        const {counter, increment, decrement} = this.props;
        return (
            <div>
                counter: {counter}
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        }
    };
};

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);