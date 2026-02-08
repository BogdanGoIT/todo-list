export function saveStorage (key, data){
    localStorage.setItem(key, JSON.stringify(data));
}
export function getStorage (key){
    const getLocal = localStorage.getItem(key);
    if(!getLocal){
        return null;
    } 
        return JSON.parse(getLocal);
};

export const LOCALKEY_TASKS = "tasks";