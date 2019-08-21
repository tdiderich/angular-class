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
    MatProgressBarModule,
    MatDialogModule
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
        MatProgressBarModule,
        MatDialogModule],
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
        MatProgressBarModule,
        MatDialogModule]
}
)
export class MaterialModule{}