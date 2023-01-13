import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: any) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== "body") return value;

    const { error } = this.schema.validate(value);

    if (error) {
      const errorMessages = error.details.map(d => d.message).join();

      throw new BadRequestException(errorMessages);
    }

    return value;
  }
}
