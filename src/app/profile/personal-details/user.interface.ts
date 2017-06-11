import {CardInfo} from '../../store/store/cards/card-info';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    balance: number;
    image: string;
    agreement: boolean;
    biography: string;
    purchases: CardInfo[];
    pending: boolean;
    secureGroup: string;

}
