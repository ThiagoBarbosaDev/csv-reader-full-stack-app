export default class LoginService {
  validate = async (authToken:string):Promise<Record<string, string>> => {
    return { message: 'validate route works' };
  };
}

