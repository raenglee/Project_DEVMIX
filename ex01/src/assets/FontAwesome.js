// src/plugins/FontAwesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons'; // 채워진 북마크
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons'; // 빈 북마크
import { faEye, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(solidBookmark, regularBookmark, faEye, faComment);

export default FontAwesomeIcon;
