import { NgModule } from "@angular/core";
import { 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressBarModule
} from "@angular/material";

@NgModule({
    imports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTooltipModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatProgressBarModule],
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTooltipModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatProgressBarModule]
}
)
export class MaterialModule{}