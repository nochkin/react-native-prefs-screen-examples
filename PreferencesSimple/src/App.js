import React from 'react';
import { Preferences, PREF_TYPE } from 'react-native-prefs-screen';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.items = [
            {
                title: 'Section 1',
                data: [
                    {id: 10, name: 'field1', text: 'Fixed text label', subtext: 'This value can not be changed', type: PREF_TYPE.LABEL},
                    {id: 11, name: 'field2', text: 'Text label', subtext: 'Change me', type: PREF_TYPE.TEXTINPUT},
                    {id: 12, name: 'password', text: 'Password', subtext: 'Password field', type: PREF_TYPE.TEXTINPUT, keyboardType: 'password'},
                ]
            }, {
                title: 'Section 2',
                data: [
                    {id: 20, name: 'list1', text: 'List', subtext: 'Picker list', type: PREF_TYPE.PICKER, pickerValues: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']},
                ]
            }, {
                title: 'Section 3',
                data: [
                    {id: 30, name: 'checkbox1', text: 'Checkbox 1', subtext: 'Checkbox checked by default', type: PREF_TYPE.SWITCH},
                    {id: 31, name: 'checkbox2', text: 'Checkbox 2', subtext: 'Checkbox not-checked by default', type: PREF_TYPE.SWITCH},
                ]
            }
        ];

        this.defaults = {
            'field1': 'value 1',
            'field2': '',
            'list1': 'item 3',
            'checkbox1': '1',
        };

        this.getValue = this.getValue.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getValue(key) {
        return this.defaults[key.name];
    }

    onChange(key, value) {
        this.defaults[key.name] = value;
    }

    render() {
        return (
            <Preferences
                styles={{sectionHeader: {color: 'red'}, menuItemValueSwitch: {tintColor: 'gray'}}}
                containerStyle={{backgroundColor: '#f0f0f0'}}
                getValue={this.getValue}
                onChange={this.onChange}
                items={this.items}
            />
        )
    }
}
