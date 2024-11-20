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
    try{
        const token = await SecureStore.getItemAsync('userToken');
        console.log('token:', token )
        return token
    }catch(err){
        console.error("Error retrieving token: ", err)
    }
}

export async function deleteToken() {
    await SecureStore.deleteItemAsync('userToken');
}

