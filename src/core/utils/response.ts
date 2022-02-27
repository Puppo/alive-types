import { TypeOf, ZodType, ZodTypeDef } from 'zod';

export class ValidationError extends Error {}

export function parse<
  Schema extends ZodType<Output, Def, Input>,
  Output,
  Def extends ZodTypeDef,
  Input
>(data: unknown, schema: Schema): TypeOf<Schema> {
  return schema.parse(data);
}

export function validate<
  Schema extends ZodType<Output, Def, Input>,
  Output,
  Def extends ZodTypeDef,
  Input
>(data: unknown, schema: Schema): asserts data is TypeOf<Schema> {
  const parseResult = schema.safeParse(data);
  if (!parseResult.success) {
    throw new ValidationError(
      parseResult.error.errors.map(({ message }) => message).join('\n')
    );
  }
}

type SafeParseResult<T> =
  | { type: 'success'; value: T }
  | { type: 'error'; error: ValidationError };

export function parseSafe<
  Schema extends ZodType<Output, Def, Input>,
  Output,
  Def extends ZodTypeDef,
  Input
>(data: unknown, schema: Schema): SafeParseResult<TypeOf<Schema>> {
  const parseResult = schema.safeParse(data);
  if (parseResult.success) {
    return { type: 'success', value: parseResult.data };
  }
  return {
    type: 'error',
    error: new ValidationError(parseResult.error.message),
  };
}
