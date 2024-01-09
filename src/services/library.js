
import { mande, defaults } from 'mande';
const baseURL = 'https://api.hospitalmetropolitano.org/v2/medicos/bdm';


export function getFolders(data) {
    const patients = mande( `${baseURL}/list`);
    return patients.post(data);
}
export function checkFolder(data) {
    const patients = mande( `${baseURL}/folder`);
    return patients.post(data);
}
export function deleteFile(url) {
    const patients = mande( `${url}`);
    return patients.post({});
}
export function createFolder(data) {
    const patients = mande( `${baseURL}/addfolder`);
    return patients.post(data);
}
export function uploadFile(data) {
    const patients = mande( `${baseURL}/upload`);
    return patients.post(data);
}

