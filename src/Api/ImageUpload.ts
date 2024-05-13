import * as FileSystem from 'expo-file-system';
import { getUser } from '../Contexts/AuthContext';
import { BaseUrl } from './wrapper';

export async function upLoad(ImageUrl: string): Promise<string> {
    try {
        const userSession = await getUser();
        const res = await FileSystem.uploadAsync(`${BaseUrl}/images/upload`, ImageUrl, {
            httpMethod: 'POST',
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
            fieldName: 'file',
            headers: {
                authorization: `Bearer ${userSession?.authToken}`
            }
        });
        return res.body
    } catch (error) {
        throw console.log(error)
    }
}