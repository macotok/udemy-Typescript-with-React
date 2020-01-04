import { createContext } from 'react';
import { IState } from '../interfaces';
import { initialState } from './index';

const AppContext = createContext<IState | any>(initialState);

export default AppContext;
