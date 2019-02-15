import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
} from '@elastic/eui';

function Form () {
    return (
        <EuiFlexGroup style={{ maxWidth: 600 }}>
            <EuiFlexItem>
            <EuiFormRow label="First name" helpText="I am helpful help text!">
                <EuiFieldText />
            </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
            <EuiFormRow label="Last name">
                <EuiFieldText />
            </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
            <EuiFormRow hasEmptyLabelSpace>
                <EuiButton>Save</EuiButton>
            </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
}

ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
