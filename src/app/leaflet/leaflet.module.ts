/*!
 * Leaflet Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

import { LeafletMapService } from './leaflet-map.service';
import { LeafletTileProviderService } from './leaflet-tile-provider.service';

import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { LeafletTileSelectorComponent } from './leaflet-tile-selector/leaflet-tile-selector.component';
import { LeafletGeocoderComponent } from './leaflet-geocoder/leaflet-geocoder.component';
import { LeafletZoomComponent } from './leaflet-zoom/leaflet-zoom.component';
import { LeafletMeasureComponent } from './leaflet-measure/leaflet-measure.component';
import { LeafletButtonComponent } from './leaflet-button/leaflet-button.component';
import { LeafletWmsLayerComponent } from './leaflet-wms-layer/leaflet-wms-layer.component';
import { LeafletOpacitySliderComponent } from './leaflet-opacity-slider/leaflet-opacity-slider.component';
import { LeafletSidebarComponent } from './leaflet-sidebar/leaflet-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    AccordionModule
  ],
  declarations: [
    LeafletMapComponent,
    LeafletTileSelectorComponent,
    LeafletGeocoderComponent,
    LeafletZoomComponent,
    LeafletMeasureComponent,
    LeafletButtonComponent,
    LeafletWmsLayerComponent,
    LeafletOpacitySliderComponent,
    LeafletSidebarComponent,
  ],
  providers: [
    LeafletMapService,
    LeafletTileProviderService
  ],
  exports: [
    LeafletMapComponent,
    LeafletTileSelectorComponent,
    LeafletGeocoderComponent,
    LeafletZoomComponent,
    LeafletMeasureComponent,
    LeafletButtonComponent,
    LeafletWmsLayerComponent,
    LeafletOpacitySliderComponent,
    LeafletSidebarComponent
  ]
})
export class LeafletModule { }


