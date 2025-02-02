import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { MultipleDoc } from './multipledoc';
import { LabelDoc } from './labeldoc';
import { DynamicDoc } from './dynamicdoc';
import { DisabledDoc } from './disableddoc';
import { StyleDoc } from './styledoc';
import { PropsDoc } from './propsdoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, AppCodeModule, AppDocModule, CheckboxModule],
    exports: [ImportDoc],
    declarations: [ImportDoc, BasicDoc, MultipleDoc, LabelDoc, DynamicDoc, DisabledDoc, StyleDoc, PropsDoc, AccessibilityDoc]
})
export class CheckboxDocModule {}
