import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: "about",
        component: AboutMeComponent,
    },

    {
        path: "projects",
        component: ProjectsComponent,
    },

    {
        path: "experience",
        component: ExperienceComponent,
    },
    
    {
        path: "studies",
        component: StudiesComponent,
    },

    {
        path: "contact",
        component: ContactComponent,
    }
];
