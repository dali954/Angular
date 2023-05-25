import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe.model';
import { Project } from 'src/app/models/project.model';
import { EquipeService } from 'src/app/services/equipe.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit{
  @Input() viewMode = false;

  @Input() currentProject: Project = {
    equipe: new Equipe(),
    name: '',
    date_debut_project: new Date(),
    date_fin_project: new Date()
  };

  equipes: Equipe[] = [];
  message = '';

  constructor(
    private projectService: ProjectService,
    private equipeService: EquipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProject(this.route.snapshot.params["id"]);
      this.getEquipes();
    }
  }

  getProject(id_project: string): void {
    this.projectService.get(id_project)
      .subscribe({
        next: (data) => {
          this.currentProject = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  getEquipes(): void {
    this.equipeService.getEquipes()
      .subscribe({
        next: (data) => {
          this.equipes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateProject(): void {
    this.message = '';

    this.projectService.update(this.currentProject.id_project, this.currentProject)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This project was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteProject(): void {
    this.projectService.delete(this.currentProject.id_project)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/projects']);
        },
        error: (e) => console.error(e)
      });
  }

}


// import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Equipe } from 'src/app/models/equipe.model';
// import { Project } from 'src/app/models/project.model';
// import { EquipeService } from 'src/app/services/equipe.service';
// import { ProjectService } from 'src/app/services/project.service';

// @Component({
//   selector: 'app-project-details',
//   templateUrl: './project-details.component.html',
//   styleUrls: ['./project-details.component.css']
// })
// export class ProjectDetailsComponent implements OnInit {
//   @Input() viewMode = false;
//   @Input() currentProject: Project;

//   equipes: Equipe[] = [];
//   message = '';

//   constructor(
//     private projectService: ProjectService,
//     private equipeService: EquipeService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     if (!this.viewMode) {
//       this.message = '';
//       this.getProject(this.route.snapshot.params["id"]);
//       this.getEquipes();
//     }
//   }

//   getProject(id_project: string): void {
//     this.projectService.get(id_project)
//       .subscribe({
//         next: (data) => {
//           this.currentProject = data;
//           console.log(data);
//         },
//         error: (e) => console.error(e)
//       });
//   }

//   getEquipes(): void {
//     this.equipeService.getEquipes()
//       .subscribe({
//         next: (data) => {
//           this.equipes = data;
//           console.log(data);
//         },
//         error: (e) => console.error(e)
//       });
//   }

//   updateProject(): void {
//     this.message = '';

//     this.projectService.update(this.currentProject.id_project, this.currentProject)
//       .subscribe({
//         next: (res) => {
//           console.log(res);
//           this.message = res.message ? res.message : 'This project was updated successfully!';
//         },
//         error: (e) => console.error(e)
//       });
//   }

//   deleteProject(): void {
//     this.projectService.delete(this.currentProject.id_project)
//       .subscribe({
//         next: (res) => {
//           console.log(res);
//           this.router.navigate(['/projects']);
//         },
//         error: (e) => console.error(e)
//       });
//   }
// }
