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
      .required(), // field exists
    product_code: Joi.string().trim().required(),
  })
);

export default CsvFileSchema;
