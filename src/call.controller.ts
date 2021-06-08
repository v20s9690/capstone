import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('call')
export class CallController {
  private tables: Set<string>;

  @Get('table/:table_no')
  async requestClerk(@Req() request: Request): Promise<string> {
    let res = { result:[] };
    const tableNumber = request.body;
    this.tables.add(tableNumber);
    res.result.push(tableNumber);
    return JSON.stringify(res);
  }

  @Get('table/alarm')
  async getRequests(@Req() request: Request): Promise<string> {
    const tables = new Set();
    this.tables.forEach(value => tables.add(value));
    const result = JSON.stringify(tables);
    this.tables.clear();
    return JSON.stringify({result: result});
  }
}