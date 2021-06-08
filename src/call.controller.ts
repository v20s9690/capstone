import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('call')
export class CallController {
  private tables: Set<string> = new Set();

  @Get('table/number/:table_no')
  async requestClerk(@Param('table_no') tableNumber: string): Promise<string> {
    let res = { result:[] };
    console.log(tableNumber);
    if (tableNumber === undefined) {
      return JSON.stringify({ result: 'unable to convert to string or empty value'});
    }
    this.tables.add(tableNumber);
    res.result.push(tableNumber);
    return JSON.stringify(res);
  }

  @Get('table/alarm')
  async getRequests(@Req() request: Request): Promise<string> {
    const tables = new Set();
    this.tables.forEach((key, value, set) => {
      console.log(`${key}, ${value}, ${set}`);
      tables.add(value)
    });
    const result = JSON.stringify(this.tables);
    this.tables.clear();
    return JSON.stringify({result: result});
  }
}