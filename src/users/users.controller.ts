import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private user: UsersService) {}
    
    // @Post()
    // create(@Body() body) {
    //     return this.user.createUser(body)
    // }

    @Get()
    findAll() {
        return this.user.getUser()
    }

    // @Put(':id')
    // findParams(@Param('id') id, @Body() data){
    //     data.id = id
    //     return this.user.updateUser(data)
    // }

    // @Delete()
    // delete(@Query('id') id){
    //     return this.user.deleteUser(id)
    // }
}
