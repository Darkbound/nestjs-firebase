import * as Joi from "joi";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserCreditsDto extends PartialType(CreateUserDto) {
  credits: number;
}

export const UpdateUserCreditsDtoSchema = Joi.object({
  credits: Joi.number().required()
}).options({
  abortEarly: false
});
