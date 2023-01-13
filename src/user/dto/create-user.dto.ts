import * as Joi from "joi";

export class CreateUserDto {
  acceptedToS: boolean;
  acceptedToSAt: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const CreateUserDtoSchema = Joi.object<CreateUserDto, true>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  acceptedToSAt: Joi.number().required(),
  acceptedToS: Joi.boolean().required()
}).options({
  abortEarly: false
});
