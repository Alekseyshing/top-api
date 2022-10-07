import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config'


@Controller('top-page')
export class TopPageController {

  constructor(private readonly configService: ConfigService) { }

  @Get(':id')
  async get(@Param('id') id: string) {
    this.configService.get('TEST')
  }

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {
    return null
  }


  @Delete(':id')
  async delete(@Param('id') id: string) {
    return null
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
    return null
  }

  @HttpCode(200)
  @Post('')
  async find(@Body() dto: FindTopPageDto) {
    return null
  }
}
