import { ObjectType } from '@nestjs/graphql'
import { ValetAssignment as ValetAssignmentType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class ValetAssignment implements RestrictProperties<ValetAssignment,ValetAssignmentType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
