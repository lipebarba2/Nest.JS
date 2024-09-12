/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Controller("users")
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return { body };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(":username")
  async show(@Param() param) {
    return { users: {}, param };
  }

  @Put(":id")
  async update(@Body() {email, name, password}:UpdatePutUserDTO, @Param() params) {
    return {
      method: "put",
      email, name, password,
      params,
    };
  }

  @Patch(":id")
  async updatePartial(@Body(){email, name, password}:UpdatePatchUserDTO, @Param() params) {
    return {
      method: "patch",
      email, name, password,
      params,
    };
  }

  @Delete(":id")
  async delete(@Param('id', ParseIntPipe) id) {
    return {
      id,
    };
  }
}
