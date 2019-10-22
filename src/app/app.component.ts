import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'closer-web'

  groups: Array<any> = []

  constructor(private api: ApiService) {
    this.api.getPublicGroups().subscribe((response: any) => {
      const groups = (response.groups as Array<any>).filter(
        group => group.name && group.about
      )

      groups.sort((a: any, b: any) => {
        if (!a.photo === !b.photo) {
          if (a.updated === b.updated) {
            return 0
          }

          return new Date(a.updated).getTime() < new Date(b.updated).getTime() ? 1 : -1
        }
        
        return !!a.photo ? -1 : 1
      })

      this.groups = groups
    })
  }
}
