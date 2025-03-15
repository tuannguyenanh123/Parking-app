import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class AddressOrderByWithRelationInputStrict
  implements RestrictProperties<AddressOrderByWithRelationInputStrict, Prisma.AddressOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class AddressOrderByWithRelationInput extends PartialType(
  AddressOrderByWithRelationInputStrict,
) {}

@InputType()
export class AddressOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
