import axios from 'axios';
import { store } from '../store';

class Connection {
    private connection!: AxiosConnect;

    setConnection(connection: AxiosConnect) {
        this.connection = connection;
    }

    createConnection() {
        return axios.create(this.connection.getConfigData());
    }
}

type AxiosConnectData = {
    timeout: number;
    baseUrl?: string;
    withCredentials?: boolean;
};

interface AxiosConnect {
    timeout: number;
    getConfigData: () => AxiosConnectData;
}

interface AxiosConnectClient extends AxiosConnect {
    baseUrl: string;
}

interface AxiosConnectDev extends AxiosConnect {
    baseUrl: string;
}

interface AxiosWithCredentials extends AxiosConnect {
    withCredentials: boolean;
}

class ClientVisitor implements AxiosConnect, AxiosConnectClient {
    public timeout: number;
    public baseUrl: string;

    constructor() {
        this.timeout = 5000;
        this.baseUrl = '/api/';
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseUrl: this.baseUrl,
        };
    }
}

class ClientGroup
    implements AxiosConnect, AxiosConnectClient, AxiosWithCredentials
{
    public timeout: number;
    public baseUrl: string;
    public withCredentials: boolean;

    constructor() {
        this.timeout = 5000;
        this.baseUrl = '/api/group/';
        this.withCredentials = true;
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseUrl: this.baseUrl,
            withCredentials: this.withCredentials,
        };
    }
}

class ClientUser
    implements AxiosConnect, AxiosConnectClient, AxiosWithCredentials
{
    public timeout: number;
    public baseUrl: string;
    public withCredentials: boolean;

    constructor() {
        this.timeout = 5000;
        this.baseUrl = '/api/user/';
        this.withCredentials = true;
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseUrl: this.baseUrl,
            withCredentials: this.withCredentials,
        };
    }
}

class DevVisitor implements AxiosConnectDev, AxiosConnectClient {
    public timeout: number;
    public baseUrl: string;

    constructor() {
        this.timeout = 5000;
        this.baseUrl = 'http://localhost:3001/api/';
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseUrl: this.baseUrl,
        };
    }
}

class DevGroup
    implements AxiosConnectDev, AxiosConnectClient, AxiosWithCredentials
{
    public timeout: number;
    public baseUrl: string;
    public withCredentials: boolean;

    constructor() {
        this.timeout = 5000;
        this.baseUrl = 'http://localhost:3001/api/group/';
        this.withCredentials = true;
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseUrl: this.baseUrl,
            withCredentials: this.withCredentials,
        };
    }
}

class DevUser
    implements AxiosConnectDev, AxiosConnectClient, AxiosWithCredentials
{
    public timeout: number;
    public baseUrl: string;
    public withCredentials: boolean;

    constructor() {
        this.timeout = 5000;
        this.baseUrl = 'http://localhost:3001/api/user/';
        this.withCredentials = true;
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseUrl: this.baseUrl,
            withCredentials: this.withCredentials,
        };
    }
}

const createConnection = (mode: string | undefined, typeUser: string) => {
    const connect: Connection = new Connection();
    if (mode && mode === 'client' && typeUser === 'visitor')
        connect.setConnection(new ClientVisitor());
    if (mode && mode === 'client' && typeUser === 'group')
        connect.setConnection(new ClientGroup());
    if (mode && mode === 'client' && typeUser === 'user')
        connect.setConnection(new ClientUser());

    if (mode && mode === 'dev' && typeUser === 'visitor')
        connect.setConnection(new DevVisitor());
    if (mode && mode === 'dev' && typeUser === 'group')
        connect.setConnection(new DevGroup());
    if (mode && mode === 'dev' && typeUser === 'user')
        connect.setConnection(new DevUser());

    return connect.createConnection();
};

const currentTypeUser = store.getState().user.status;
const connection = createConnection(
    process.env.REACT_APP_MODE,
    currentTypeUser
);

export default connection;
