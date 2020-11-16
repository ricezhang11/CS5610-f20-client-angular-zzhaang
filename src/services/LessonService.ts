import { Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModule = (moduleId: any) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/zhangzhang2/modules/${moduleId}/lessons`)
      .then(response => response.json())
}
