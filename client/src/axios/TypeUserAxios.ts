import {
    AxiosConnectData,
    AxiosConnect,
    AxiosConnectClient,
    AxiosConnectDev,
    AxiosWithCredentials,
} from './BaseTypes';

export class ClientVisitor implements AxiosConnect, AxiosConnectClient {
    public timeout: number;
    public baseURL: string;

    constructor() {
        this.timeout = 5000;
        this.baseURL = 'http://localhost:3000/api';
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseURL: this.baseURL,
        };
    }
}

export class ClientGroup
    implements AxiosConnect, AxiosConnectClient, AxiosWithCredentials
{
    public timeout: number;
    public baseURL: string;
    public withCredentials: boolean;

    constructor() {
        this.timeout = 5000;
        this.baseURL = 'http://localhost:3000/api/group';
        this.withCredentials = true;
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseURL: this.baseURL,
            withCredentials: this.withCredentials,
        };
    }
}

export class ClientUser
    implements AxiosConnect, AxiosConnectClient, AxiosWithCredentials
{
    public timeout: number;
    public baseURL: string;
    public withCredentials: boolean;

    constructor() {
        this.timeout = 5000;
        this.baseURL = 'http://localhost:3000/api/user';
        this.withCredentials = true;
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseURL: this.baseURL,
            withCredentials: this.withCredentials,
        };
    }
}

export class DevVisitor implements AxiosConnectDev, AxiosConnectClient {
    public timeout: number;
    public baseURL: string;

    constructor() {
        this.timeout = 5000;
        this.baseURL = 'http://localhost:3001/api';
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseURL: this.baseURL,
        };
    }
}

export class DevGroup
    implements AxiosConnectDev, AxiosConnectClient, AxiosWithCredentials
{
    public timeout: number;
    public baseURL: string;
    public withCredentials: boolean;

    constructor() {
        this.timeout = 5000;
        this.baseURL = 'http://localhost:3001/api/group';
        this.withCredentials = true;
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseURL: this.baseURL,
            withCredentials: this.withCredentials,
        };
    }
}

export class DevUser
    implements AxiosConnectDev, AxiosConnectClient, AxiosWithCredentials
{
    public timeout: number;
    public baseURL: string;
    public withCredentials: boolean;

    constructor() {
        this.timeout = 5000;
        this.baseURL = 'http://localhost:3001/api/user';
        this.withCredentials = true;
    }

    getConfigData(): AxiosConnectData {
        return {
            timeout: this.timeout,
            baseURL: this.baseURL,
            withCredentials: this.withCredentials,
        };
    }
}
