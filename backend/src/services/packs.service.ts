import Pack from '../database/models/PackModel';
import IPack from '../interfaces/packs.interfaces';

export default class PacksService {
  update = async ():Promise<IPack[]> => {
    const response = await Pack.findAll({ raw: true });
    return response;
  };
}
