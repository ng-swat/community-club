import {CardInfo} from '../../store/store/cards/card-info';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  balance: number;
  Image: string;
  agreement: boolean;
  biography: string;
  purchases: CardInfo[];

}
