import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';
import { fileNames } from 'src/globalVars';
import { resolve } from 'path';


@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) { }


  @Get('test')
  test() {
    const x = resolve(fileNames.xlsx_file_dir, fileNames.main_file)

    console.log(x)


    return "test"
  }






  @Get('artefacts/:measureID')
  getArtefactsOfMeasure(@Param() params) {
    console.log("getAllArtefacts")
    console.log(params.measureID)
    return this.apiService.getArtefactsOfMeasure(params.measureID);
  }

  @Get("all_artefacts")
  getAllArtefacts() {
    console.log("getAllArtefacts")
    return "hi"
    //       return this.xlsxParseService.getAllArtefacts();
  }

  @Get("overview")
  getOverview() {
    console.log("getOverview")

    return this.apiService.getOverview();
  }

  @Get("measures")
  getAllMeasures() {
    console.log("getAllMeasures")
    return this.apiService.getAllMeasures();
  }

  @Get("budget")
  getBudget() {
    console.log("getBudget")
    return this.apiService.getBudget();
  }


}
