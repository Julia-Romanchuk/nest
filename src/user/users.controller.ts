import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';

@Controller('users') // specify the path controller responsible for '.../user'
export class UsersController {
  @Get()
  @HttpCode(HttpStatus.ACCEPTED) // allow to set specific code to entire response
  getAll (@Query() pagination) {
    const { limit, page } = pagination;

    return `There are ${limit} users on page ${page}`
  }

  @Get(':id') // that's how we can extract params from the path
  getOne(@Param('id') id: string) { // specify required param name
  // getOne(@Param() params) { // get obj with all existing params
    return 'Concrete user'
  }

  @Post()
  create(@Body() userInput) {
    return userInput
  }

  @Patch(':id') // allow updating partial, not all obj like PUT does
  update(@Param('id') id: string, @Body() userInput) { // could pass few args
  // update(@Body('name') userInput) { // to extract some props
    return userInput
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `User ${id} removed`
  }
}
