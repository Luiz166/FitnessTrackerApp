import * as SecureStore from 'expo-secure-store'

export async function saveToken(token: string, username: string){
    try{
        await SecureStore.setItemAsync('userToken', token);
        await SecureStore.setItemAsync('username', username);
        console.log('token saved')
    }catch(error){
        console.error("Error saving token: ", error)
    }
}

export async function getToken(key : string) {
    try{
        const token = await SecureStore.getItemAsync(key);
        console.log(key , token )
        return token
    }catch(err){
        console.error("Error retrieving token: ", err)
    }
}

export async function deleteToken() {
    await SecureStore.deleteItemAsync('userToken');
}

