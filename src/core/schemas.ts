import { z } from 'zod';

const isoDateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/);

export const IsoDateSchema = z.preprocess(<K>(args: K): Date | undefined => {
  if (args instanceof Date) return args;
  const parseResult = isoDateString.safeParse(args);
  if (parseResult.success) return new Date(parseResult.data);
  return undefined;
}, z.date());

export const CustomerSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export const ShippingSchema = z.object({
  date: IsoDateSchema,
  trackingNumber: z.string(),
  company: z.string(),
});

export const DeliverySchema = z.object({
  date: IsoDateSchema,
  signedBy: z.string(),
});

export const CurrencySchema = z.object({
  amount: z.number(),
  currency: z.union([z.literal('USD'), z.literal('EUR')]),
});

export const DraftOrderSchema = z.object({
  type: z.literal('draft'),
  id: z.number(),
  createdAt: IsoDateSchema,
  customer: CustomerSchema,
  total: CurrencySchema,
});

export const InProgressOrderSchema = z.object({
  type: z.literal('progress'),
  id: z.number(),
  createdAt: IsoDateSchema,
  customer: CustomerSchema,
  date: IsoDateSchema,
  total: CurrencySchema,
});

export const ShipOrderSchema = z.object({
  type: z.literal('ship'),
  id: z.number(),
  createdAt: IsoDateSchema,
  customer: CustomerSchema,
  date: IsoDateSchema,
  total: CurrencySchema,
  ship: ShippingSchema,
});

export const DeliveryOrderSchema = z.object({
  type: z.literal('delivery'),
  id: z.number(),
  createdAt: IsoDateSchema,
  date: IsoDateSchema,
  customer: CustomerSchema,
  total: CurrencySchema,
  ship: ShippingSchema,
  delivery: DeliverySchema,
});

export const OrderSchema = z.union([
  DraftOrderSchema,
  InProgressOrderSchema,
  ShipOrderSchema,
  DeliveryOrderSchema,
]);

export const OrderArraySchema = z.array(OrderSchema);
