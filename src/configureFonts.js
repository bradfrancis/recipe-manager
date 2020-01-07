import { library } from '@fortawesome/fontawesome-svg-core';
import { 
	faUtensils, 
	faWeight,
	faBalanceScale,
	faBatteryThreeQuarters,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

const fonts = [
    faBalanceScale,
    faBatteryThreeQuarters,
    faWeight,
    faUtensils,
    faSearch
];

const configureFonts = () => {
    library.add(...fonts);
};

export default configureFonts;
