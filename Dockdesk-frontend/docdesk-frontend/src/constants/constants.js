import { Platform } from 'react-native';


const base = Platform.OS === "android" ? "http://10.204.138.240" : "http://localhost";

const port = 5000;

export const baseUrl = `${base}:${port}/api`;
