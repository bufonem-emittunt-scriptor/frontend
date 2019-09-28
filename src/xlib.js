import XCard from './components/lib/x-card.vue';
import XRow from './components/lib/x-row.vue';
import XCol from './components/lib/x-col.vue';
import XIcon from './components/lib/x-icon.vue';
import XButton from './components/lib/x-button.vue';
import XButtonNs from './components/lib/x-button-no-scale.vue';
import XDatePicker from './components/lib/x-date-picker.vue';
import XInput from './components/lib/x-input.vue';
import XPicker from './components/lib/x-picker.vue';
import sty from '@/static/app.scss';
import Ripple from '@/components/lib/ripple.js'
import '@/components/lib/ripple.css';

export default {
  install(Vue) {
    Vue.component('x-card', XCard);
    Vue.component('x-row', XRow);
    Vue.component('x-col', XCol);
    Vue.component('x-icon', XIcon);
    Vue.component('x-button', XButton);
    Vue.component('x-button-ns', XButtonNs);
    Vue.component('x-date-picker', XDatePicker);
    Vue.component('x-input', XInput);
    Vue.component('x-picker', XPicker);
    Vue.directive('ripple', Ripple);
    Vue.mixin({
      data: () => ({
        sty,
      }),
      methods: {
        elevator(lv) {
          const lifts = [
            'none',
            '0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12), 0 1px 3px 0 rgba(0, 0, 0, .20)',
            '0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .20)',
            '0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20)',
            '0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)',
            '0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .20)',
            '0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .20)',
            '0 9px 12px 1px rgba(0, 0, 0, .14), 0 3px 16px 2px rgba(0, 0, 0, .12), 0 5px 6px -3px rgba(0, 0, 0, .20)',
            '0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12), 0 7px 8px -4px rgba(0, 0, 0, .20)',
            '0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .20)',
            '0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12), 0 11px 15px -7px rgba(0, 0, 0, .20)',
          ];
          if (lv > 10) {
            return lifts[lifts.length - 1];
          } if (lv < 0) {
            return lifts[0];
          }
          return lifts[lv];
        },
      },
    });
  },
};
