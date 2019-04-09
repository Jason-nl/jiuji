/*
 * @Author: Jason 
 * @Date: 2019-04-02 16:00:00 
 * @Last Modified by: Jason
 * @Last Modified time: 2019-04-08 12:54:54
 */

import http from '@/utils/http';
// console.log(http);

export const HomeData = () => http('get', '/api/web/api/floors/v1?label=0&page=1&random=0');

export const HomeRes = () => http('get', '/api/web/api/floors/specialEnjoy/v1');

export const HomeLimit = () => http('get', '/api/web/api/floors/v1?label=891839163259564033&page=1&random=1554173808867');

export const HomeRepair = () => http('get', '/api/web/api/floors/v1?label=891839589119832066&page=1&random=0');

export const HomeTrade = () => http('get', '/api/web/api/floors/v1?label=953075097912078338&page=1&random=0');

export const HomeHeadline = () => http('get', '/api/web/api/floors/v1?label=891839620925239297&page=1&random=0');