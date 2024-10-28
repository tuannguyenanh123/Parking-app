import { InputType, PickType } from '@nestjs/graphql'
import { User } from '../entity/user.entity'

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['name', 'uid'],
  InputType,
) {}

@InputType()
export class RegisterWithCredentialInput {
  name: string
  email: string
  password: string
  image?: string
}
