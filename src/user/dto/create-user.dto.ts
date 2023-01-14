import * as Yup from "yup";

export class CreateUserDto {
  acceptedToS: boolean;
  acceptedToSAt: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const CreateUserDtoSchema: Yup.SchemaOf<CreateUserDto> = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  acceptedToSAt: Yup.number().required(),
  acceptedToS: Yup.boolean().required()
});
