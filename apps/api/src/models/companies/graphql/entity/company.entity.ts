import { ObjectType } from '@nestjs/graphql'
import { Company as CompanyType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Company implements RestrictProperties<Company,CompanyType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
