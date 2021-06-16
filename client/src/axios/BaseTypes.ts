export type AxiosConnectData = {
    timeout: number;
    baseURL?: string;
    withCredentials?: boolean;
};

export interface AxiosConnect {
    timeout: number;
    getConfigData: () => AxiosConnectData;
}

export interface AxiosConnectClient extends AxiosConnect {
    baseURL: string;
}

export interface AxiosConnectDev extends AxiosConnect {
    baseURL: string;
}

export interface AxiosWithCredentials extends AxiosConnect {
    withCredentials: boolean;
}
