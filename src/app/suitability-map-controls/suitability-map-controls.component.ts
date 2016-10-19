/*!
 * Suitability Map Controls Component
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suitability-map-controls',
  templateUrl: './suitability-map-controls.component.html',
  styleUrls: ['./suitability-map-controls.component.sass']
})
export class SuitabilityMapControlsComponent implements OnInit {
  public cropData: Array<any> = [];

  @ViewChild('controlwrapper') controlWrapper: ElementRef;

  constructor(public router: Router) {
    this.cropData = [
      {
        name: 'Rice',
        slug: 'rice'
      }, {
        name: 'Corn',
        slug: 'corn',
        subcrops: [
          {name: 'Corn Dry', slug: 'corn-dry'},
          {name: 'Corn Wet', slug: 'corn-wet'}
        ]
      }, {
        name: 'Banana',
        slug: 'banana'
      }, {
        name: 'Coconut',
        slug: 'coconut'
      }, {
        name: 'Coffee',
        slug: 'coffee',
        subcrops: [
          {name: 'Coffee Arabica', slug: 'coffee-arabica'},
          {name: 'Coffee Robusta', slug: 'coffee-robusta'}
        ]
      }, {
        name: 'Cacao',
        slug: 'cacao'
      }
    ];
  }

  ngOnInit() { }

  suitabilityRedirect(event, crop: string, containsChild = true) {
    if (containsChild) {
      return;
    }

    // redirect to the URL
    this.router.navigateByUrl(`/suitability-maps/${crop}`);
  }

}

