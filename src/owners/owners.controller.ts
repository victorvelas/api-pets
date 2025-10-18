import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { ServerResponse } from 'http';
// import { Request, Response } from 'express';

@Controller('owners')
export class OwnersController {

	public constructor(private readonly service:OwnersService) {
		
	}
    
	@Get('/')
	public index() 
	{
		return {
			info: 'Owners list', 
			list: this.service.findAll()
		}
	}

	@Get('/find/:id')
	public find(@Param('id') id:Number = 0) 
	{
		const owner = this.service.find(id as Number)
		return {
			foundIt: owner !== null,
			info: owner
		};
	}


	@Post('/save')
	public save(@Body() data) 
	{
		this.service.save(data)
		return { success: true};
	}

	@Put('/save')
	public update(@Req() req) 
	{
		return {};
	}

	@Delete('/save')
	public delete(@Req() req) 
	{
		return {};
	}

}
