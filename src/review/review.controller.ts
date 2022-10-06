import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {

  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {
    return null
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return null
  }

  @Get('byProduct/:productId')
  async get(@Param('productId') productId: string) {
    return null
  }
}
