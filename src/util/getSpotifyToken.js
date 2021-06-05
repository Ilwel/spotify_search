const CLIENT_ID     = 'f0c07a50a56f4891bac717349ea22791';
const CLIENT_SECRET = '8f95b5d40a4a4ef6b2528bc8dba08f4b';

const baseUrl = (id, secret) => `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${id}&client_secret=${secret}`;

export default async function getSpotifyToken(){

    try {

        const response = await fetch(baseUrl(CLIENT_ID, CLIENT_SECRET), {
            method:'POST',
            headers: {
    
                'Content-type': 'application/x-www-form-urlencoded',
    
            },
        }).catch(err => console.log(err));
    
        const { access_token, token_type} = await response.json();
    
        return `${token_type} ${access_token}`;
        
    } catch (error) {
        
        console.log(error);
        throw error;

    }



}