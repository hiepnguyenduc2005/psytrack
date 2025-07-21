import apiCall from '../utils/apiCall'

interface HelloResponse {
    message: string;
}

const helloService = async (): Promise<string> => {
    const data = await apiCall<HelloResponse>('api/api/hello');
    const text = data.message;
    return text;
}

export default helloService;