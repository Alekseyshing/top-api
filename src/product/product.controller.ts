import { HttpCode, Body, Controller, Post, Get, Param, Delete, Patch } from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {

  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {
    return null
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return null
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return null
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {
    return null
  }

  @HttpCode(200)
  @Post('')
  async find(@Body() dto: FindProductDto) {
    return null
  }
}
