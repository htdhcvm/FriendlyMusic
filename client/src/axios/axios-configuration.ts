import axios from 'axios';
import Connection from './ConnectionWrapper';

import {
    ClientVisitor,
    ClientGroup,
    ClientUser,
    DevVisitor,
    DevGroup,
    DevUser,
} from './TypeUserAxios';

const createConnection = (mode: string | undefined) => {
    const connect: Connection = new Connection();
    if (mode && mode === 'client') {
        connect.setConnection(
            new ClientVisitor(),
            new ClientGroup(),
            new ClientUser()
        );
    }

    if (mode && mode === 'dev') {
        connect.setConnection(new DevVisitor(), new DevGroup(), new DevUser());
    }

    return connect.createConnection();
};

const { connectionVisitor, connectionGroup, connectionUser } = createConnection(
    process.env.REACT_APP_MODE
);

export const Youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const Visitor = connectionVisitor;
export const Group = connectionGroup;
export const User = connectionUser;
