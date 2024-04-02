// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_URL;
export const NEXT_IS_PROD = process.env.NODE_ENV === 'production';
