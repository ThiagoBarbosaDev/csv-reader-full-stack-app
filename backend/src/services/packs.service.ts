export default class PacksService {
  update = async (authToken:string):Promise<Record<string, string>> => {
    return { message: 'update route works' };
  };
}