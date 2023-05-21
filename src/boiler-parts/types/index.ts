import { ApiProperty } from '@nestjs/swagger';

export interface IBoilerPartsQuery {
  limit: string;
  offset: string;
}

class BoilerParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Henry' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 5105 })
  price: number;

  @ApiProperty({ example: 'Azure' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'kzUcDnLcKh3RM4S' })
  vendor_code: string;

  @ApiProperty({ example: 'Neque sint' })
  name: string;

  @ApiProperty({
    example:
      'Eius occaecati itaque consequuntur nesciunt architecto odit alias exercitationem libero.',
  })
  description: string;

  @ApiProperty({
    example:
      '["https://loremflickr.com/640/480/technology?lock=2384211298222082380944351","https://loremflickr.com/640/480/technology?lock=33821995732828165044174542","https://loremflickr.com/640/480/technology?lock=12785773581434882911652693","https://loremflickr.com/640/480/technology?lock=85066745936609284049373622","https://loremflickr.com/640/480/technology?lock=86367253225799687377238449","https://loremflickr.com/640/480/technology?lock=29225164608634887154855980","https://loremflickr.com/640/480/technology?lock=84017554548326400086144707"]',
  })
  images: string;

  @ApiProperty({ example: 4 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestsellers: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 68 })
  popularity: number;

  @ApiProperty({ example: 'Minus iste deserunt soluta saepe ad nam.' })
  compatibility: string;

  @ApiProperty({ example: '2023-05-18T21:49:29.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-05-18T21:49:29.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: BoilerParts;
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestsellers: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Bestsellers, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends BoilerParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: NewParts, isArray: true })
  rows: NewParts;
}

export class GetSearchResponse extends PaginateAndFilterResponse {}

export class GetSearchRequest {
  @ApiProperty({ example: 'l' })
  search: string;
}

export class GetByNameResponse extends BoilerParts {}

export class GetByNameRequest {
  @ApiProperty({ example: 'Neque sint' })
  name: string;
}

export class FindOneResponse extends BoilerParts {}
