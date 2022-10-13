/* eslint-disable @typescript-eslint/no-empty-interface */
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop, index } from '@typegoose/typegoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageModel extends Base { }

export class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

@index({ '$**': 'text' })
export class TopPageModel extends TimeStamps {

  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @prop({ unique: true })
  secondCategory: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => HhData })
  hh?: HhData;

  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];

  @prop()
  seoText: string;

  @prop()
  tagsTitle: string;

  @prop({ type: () => [String] })
  tags: string[];
}
