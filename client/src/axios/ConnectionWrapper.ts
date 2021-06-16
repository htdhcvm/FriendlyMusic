import axios from 'axios';

import { AxiosConnect } from './BaseTypes';

export default class Connection {
    private connectionVisitor!: AxiosConnect;
    private connectionGroup!: AxiosConnect;
    private connectionUser!: AxiosConnect;

    setConnection(
        connectionVisitor: AxiosConnect,
        connectionGroup: AxiosConnect,
        connectionUser: AxiosConnect
    ) {
        this.connectionVisitor = connectionVisitor;
        this.connectionGroup = connectionGroup;
        this.connectionUser = connectionUser;
    }

    createConnection() {
        return {
            connectionVisitor: axios.create({
                ...this.connectionVisitor.getConfigData(),
            }),
            connectionGroup: axios.create({
                ...this.connectionGroup.getConfigData(),
            }),
            connectionUser: axios.create({
                ...this.connectionUser.getConfigData(),
            }),
        };
    }
}
