import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";

const routes:Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'user',
        component:UserComponent,
        children:[
            {
                path:'user-table',
                component:UserDetailsComponent
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}