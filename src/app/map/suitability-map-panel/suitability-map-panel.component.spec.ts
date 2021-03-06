/* tslint:disable:no-unused-variable */

/*!
 * Suitability Map Panel Component Test
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Renderer } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { LeafletMapService } from '../../leaflet';
import { SuitabilityMapService } from '../suitability-map.service';
import { MapLayersReducer, SuitabilityLevelsReducer } from '../../store';
import { MockRouter } from '../../mocks/router';
import { SuitabilityMapPanelComponent } from './suitability-map-panel.component';

describe('Component: SuitabilityMapPanel', () => {
  let mockRouter: MockRouter;

  beforeEach(() => {
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      providers: [
        Renderer,
        LeafletMapService,
        SuitabilityMapService,
        SuitabilityMapPanelComponent,

        { provide: Router, useValue: mockRouter },

        provideStore({
          mapLayers: MapLayersReducer,
          suitabilityLevels: SuitabilityLevelsReducer
        })
      ]
    });
  });

  it('should create an instance', inject([SuitabilityMapPanelComponent], (component: SuitabilityMapPanelComponent) => {
    expect(component).toBeTruthy();
  }));

});


