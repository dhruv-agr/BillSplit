import Config from "react-native-config";

export type AuthData ={
  password:string,
    username: string
    // name: string;
  };
  const HOST_IP = Config.HOST_IP;
type loginRes={
  access_token:string
}

  let res:loginRes;
  let resp:Response;
  const signIn = async (emailId: string, pass: string): Promise<loginRes> => {
    // this is a mock of an API call, in a real app
    // will be need connect with some real API,
    // send email and password, and if credential is corret
    //the API will resolve with some token and another datas as the below
    const creds={
      email: emailId,
      password: pass
    }
    try {
      console.log("login function called");
      
    resp = await fetch(
        `${HOST_IP}authenticate`,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(creds), // body data type must match "Content-Type" header
        }
      );
      
      
    } catch (error) {
      console.log("inside error while fetching attempting login ");
      console.error(error);
    }

    return await resp.json() as loginRes;


  };
  
  export const authService = {
    signIn,
  };
  
  const JWTTokenMock =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
  