import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HealthCareSharedModule } from 'app/shared/shared.module';
import { DiseaseComponent } from './disease.component';
import { DiseaseDetailComponent } from './disease-detail.component';
import { DiseaseUpdateComponent } from './disease-update.component';
import { DiseaseDeleteDialogComponent } from './disease-delete-dialog.component';
import { diseaseRoute } from './disease.route';

@NgModule({
  imports: [HealthCareSharedModule, RouterModule.forChild(diseaseRoute)],
  declarations: [DiseaseComponent, DiseaseDetailComponent, DiseaseUpdateComponent, DiseaseDeleteDialogComponent],
  entryComponents: [DiseaseDeleteDialogComponent],
})
export class HealthCareDiseaseModule {}
