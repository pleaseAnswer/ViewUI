import Picker from '../picker.vue';
import DatePickerPanel from '../panel/Date/date.vue';
import RangeDatePickerPanel from '../panel/Date/date-range.vue';

import { oneOf, deepCopy } from '../../../utils/assist';

export default {
    name: 'CalendarPicker',
    mixins: [Picker],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange']);
            },
            default: 'date'
        },
    },
    components: { DatePickerPanel, RangeDatePickerPanel },
    computed: {
        panel(){
            const isRange =  this.type === 'daterange' || this.type === 'datetimerange';
            return isRange ? 'RangeDatePickerPanel' : 'DatePickerPanel';
        },
        ownPickerProps(){
            // return this.options;
            let callbackOption = deepCopy(this.options);
            if(callbackOption.shortcuts instanceof Array && callbackOption.shortcutsArr && (callbackOption.shortcutsArr instanceof Array)) {
                for (var i = callbackOption.shortcuts.length - 1; i >= 0; i--) {
                    if(callbackOption.shortcutsArr.indexOf(callbackOption.shortcuts[i].name) === -1) callbackOption.shortcuts.splice(i,1);
                };
            };
            return callbackOption;
        }
    },
};
