import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourse = (courseId: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/zhangzhang2/courses/${courseId}/modules`)
      .then(response => response.json())
}
