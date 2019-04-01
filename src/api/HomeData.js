
import http from '../utils/http';

export const HomeData = () => http('get','/api/web/api/floors/v1?label=0&page=1&random=0');

export const HomeRes = () => http('get','/api/web/api/floors/specialEnjoy/v1');