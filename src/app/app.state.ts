// export interface User {
//   pending: boolean;
//   firstName: string;
//   email: string;
//   secureGroup: string;
// }
import {User} from './profile/personal-details/user.interface';
import {AdminData} from './admin/admin-data.interface';
import {Users} from './MOCK/Users';

export interface AppState {
  user: User;
  adminData: AdminData;
}

export const initialState: any = {
  adminData: {users: Users}, user: {
    firstName: 'Yoni',
    lastName: 'Ziv',
    email: 'yziv95@gmail.com',
    phone: '0506944081',
    balance: 1500,
    image: 'https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.0-9/13895111_10205121212668670_4075659053528365697_n.jpg?oh=0d118456de153ebb78fafad7a031e634&oe=59BCE0B4',
    agreement: true,
    biography: '',
    purchases: null,
    pending: false,
    secureGroup: 'USER'
  }
};
