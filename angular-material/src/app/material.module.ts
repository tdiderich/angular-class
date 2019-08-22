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
    MatDialogModule,
    MatTableModule
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
        MatDialogModule,
        MatTableModule],
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
        MatDialogModule,
        MatTableModule]
}
)
export class MaterialModule{}