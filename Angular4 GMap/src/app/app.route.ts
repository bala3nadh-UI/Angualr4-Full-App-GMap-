/********************
Copyright PwC India, 2016 - 2025

This Agreement,governs the relationship between Melco Crown Entertainment, a Business Entity, (hereinafter: Licensee) and PricewaterhouseCoopers, a duly registered company in whose principal place of business is United States (hereinafter: Licensor). This Agreement sets the terms, rights, restrictions and obligations on using PwC"s UI Framework (hereinafter: The Software) created and owned by Licensor, as detailed herein

License Grant: Licensor hereby grants Licensee a Personal, Non-assignable & non-transferable, Pepetual, Commercial, Royalty free, Without the rights to create derivative works, Non-exclusive license, all with accordance with the terms set forth and other legal restrictions set forth in 3rd party software used while running Software.Limited: Licensee may use Software for the purpose of: Running Software on Licensee’s Website[10] and Server[10];Allowing 3rd Parties to run Software on Licensee’s Website[s] and Server[s];Publishing Software’s output to Licensee and 3rd Parties;
Distribute verbatim copies of Software’s output (including compiled binaries);Modify Software to suit Licensee’s needs and specifications.This license is granted perpetually, as long as you do not materially breach it.
Binary Restricted: Licensee may not sublicense Software as a part of a larger work containing more than Software, distributed solely in Object or Binary form under a personal, non-sublicensable, limited license. Such redistribution shall be limited to unlimited codebases.
Non Assignable & Non-Transferable: Licensee may not assign or transfer his rights and duties under this license. Commercial, Royalty Free: Licensee may use Software for any purpose, including paid-services, without any royalties
*****************************/

import { NgModule } from "@angular/core";
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from "@angular/router";
import { AppComponent } from "./app.component";
import { GMapComponent } from './modules/gmap/gmap.component';

import { environment } from "../environments/environment";

export const routes: Routes = [
  { path: "gmap", component: GMapComponent }
];

export const routing = RouterModule.forRoot(routes);