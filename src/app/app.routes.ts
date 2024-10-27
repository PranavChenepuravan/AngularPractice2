import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [{path:'about' , component:AboutComponent},
    {path:'profile' , component:ProfileComponent},
    {path:'skills' , component:SkillsComponent}
];
