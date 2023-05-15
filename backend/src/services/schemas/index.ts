/* eslint-disable @typescript-eslint/naming-convention */
import * as Joi from 'joi';
import { ICsvFile } from '../../interfaces';

const CsvFileSchema = Joi.array().items(
  Joi.object<ICsvFile>({
    new_price: Joi.string()
      .trim() // contains no white spaces
      .custom((value, helpers) => {
        const parsedValue = parseFloat(value);
        if (Number.isNaN(parsedValue)) {
          return helpers.error('any.invalid');
        }
        if (parsedValue.toFixed(2) !== value) {
          return helpers.error('any.invalid');
        }
        return parsedValue;
      })
      .required()
      .messages({
        'string.base':
          'Verifique se o campo "new price" do .CSV do índice ## está preenchido corretamente',
        'string.empty':
          'O campo "new price" do .CSV do índice ## não pode estar vazio.',
        'any.required':
          'O campo "new price" do .CSV do índice ## é obrigatório',
        'any.invalid': `O valor do campo "new price" do .CSV do índice ## deve ser um 
          número com duas casas decimais separado por ponto`,
      }),
    product_code: Joi.string().trim().required().messages({
      'string.base':
        'Verifique se o campo "product_code" do índice ## está preenchido corretamente',
      'string.empty':
        'Campo "product_code" do índice ## é obrigatório',
      'any.required':
        'Campo "product_code" do índice ## é obrigatório',
    }),
  })
);

export default CsvFileSchema;
