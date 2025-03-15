import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BookingTimelinesService } from './booking-timelines.service'
import { BookingTimeline } from './entity/booking-timeline.entity'
import { FindManyBookingTimelineArgs, FindUniqueBookingTimelineArgs } from './dtos/find.args'
import { CreateBookingTimelineInput } from './dtos/create-booking-timeline.input'
import { UpdateBookingTimelineInput } from './dtos/update-booking-timeline.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => BookingTimeline)
export class BookingTimelinesResolver {
  constructor(private readonly bookingTimelinesService: BookingTimelinesService,
    private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  createBookingTimeline(@Args('createBookingTimelineInput') args: CreateBookingTimelineInput, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.uid)
    return this.bookingTimelinesService.create(args)
  }

  @Query(() => [BookingTimeline], { name: 'bookingTimelines' })
  findAll(@Args() args: FindManyBookingTimelineArgs) {
    return this.bookingTimelinesService.findAll(args)
  }

  @Query(() => BookingTimeline, { name: 'bookingTimeline' })
  findOne(@Args() args: FindUniqueBookingTimelineArgs) {
    return this.bookingTimelinesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  async updateBookingTimeline(@Args('updateBookingTimelineInput') args: UpdateBookingTimelineInput, @GetUser() user: GetUserType) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, bookingTimeline.uid)
    return this.bookingTimelinesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  async removeBookingTimeline(@Args() args: FindUniqueBookingTimelineArgs, @GetUser() user: GetUserType) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique(args)
    checkRowLevelPermission(user, bookingTimeline.uid)
    return this.bookingTimelinesService.remove(args)
  }
}
