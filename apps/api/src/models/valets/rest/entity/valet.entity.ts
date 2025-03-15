import { Valet } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetEntity implements RestrictProperties<ValetEntity, Valet> {

}

