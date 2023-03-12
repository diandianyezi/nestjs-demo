import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  @Get('flavors')
  findALl() {
    return 'Here are all kinds of Coffees';
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return `this action will return #${id} coffee`;
  }
}
