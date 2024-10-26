import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [{path:'about' , component:AboutComponent},
    {path:'profile' , component:ProfileComponent}
];
