import * as SecureStore from 'expo-secure-store'

export async function saveToken(token: string){
    try{
        await SecureStore.setItemAsync('userToken', token);
        console.log('token saved')
    }catch(error){
        console.error("Error saving token: ", error)
    }
}

export async function getToken() {
    return await SecureStore.getItemAsync('userToken');
}

export async function deleteToken() {
    await SecureStore.deleteItemAsync('userToken');
}

