import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects?: Project[];
  currentProject: Project = {};
  currentIndex = -1;
  name = '';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.retrieveProjects();
  }

  retrieveProjects(): void {
    this.projectService.getAll().subscribe({
      next: (data) => {
        this.projects = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveProjects();
    this.currentProject = {};
    this.currentIndex = -1;
  }

  setActiveProject(project: Project, index: number): void {
    this.currentProject = project;
    this.currentIndex = index;
    console.log(project.id_project);
  }

  removeAllProjects(): void {
    this.projectService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchName(): void {
    this.currentProject = {};
    this.currentIndex = -1;

    if (this.name.trim()) {
      this.projectService.findByTitle(this.name).subscribe({
        next: (data) => {
          this.projects = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    } else {
      this.retrieveProjects();
    }
  }
}


// import { Component, OnInit } from '@angular/core';
// import { Project } from 'src/app/models/project.model';
// import { ProjectService } from 'src/app/services/project.service';

// @Component({
//   selector: 'app-project-list',
//   templateUrl: './project-list.component.html',
//   styleUrls: ['./project-list.component.css']
// })
// export class ProjectListComponent implements OnInit {
//   projects: Project[] = [];
//   currentProject: Project = {};
//   currentIndex = -1;
//   name = '';

//   constructor(private projectService: ProjectService) { }

//   ngOnInit(): void {
//     this.retrieveProjects();
//   }

//   retrieveProjects(): void {
//     this.projectService.getAll().subscribe({
//       next: (data) => {
//         this.projects = data;
//         console.log(data);
//       },
//       error: (e) => console.error(e)
//     });
//   }

//   refreshList(): void {
//     this.retrieveProjects();
//     this.currentProject = {};
//     this.currentIndex = -1;
//   }

//   setActiveProject(project: Project, index: number): void {
//     this.currentProject = project;
//     this.currentIndex = index;
//     console.log(project.id_project);
//   }

//   removeAllProjects(): void {
//     this.projectService.deleteAll().subscribe({
//       next: (res) => {
//         console.log(res);
//         this.refreshList();
//       },
//       error: (e) => console.error(e)
//     });
//   }

//   searchName(): void {
//     this.currentProject = {};
//     this.currentIndex = -1;

//     if (this.name.trim()) {
//       this.projectService.findByTitle(this.name).subscribe({
//         next: (data) => {
//           this.projects = data;
//           console.log(data);
//         },
//         error: (e) => console.error(e)
//       });
//     } else {
//       this.retrieveProjects();
//     }
//   }
// }
