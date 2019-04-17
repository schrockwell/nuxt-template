const SOLID_ICONS = ['faGlobe'];
const REGULAR_ICONS = [];

import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

SOLID_ICONS.forEach(icon => {
  library.add(solidIcons[icon]);
});

REGULAR_ICONS.forEach(icon => {
  library.add(regularIcons[icon]);
});

import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('fa-icon', FontAwesomeIcon);
