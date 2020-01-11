import { createContext } from 'react';
import { IState } from '../interfaces';
import { initialState } from '../reducers';

const AppContext: any = createContext<IState | any>(initialState);

export default AppContext;
