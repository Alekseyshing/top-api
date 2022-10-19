import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TopPageModule } from 'src/top-page/top-page.module';
import { SitemapController } from './sitemap.controller';
import { } from 'date-fns';

@Module({
  controllers: [SitemapController],
  imports: [TopPageModule, ConfigModule]
})
export class SitemapModule { }
