import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../browse/listing.model';
import { MOCK_LISTINGS } from '../browse/mock-listings';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
})
export class ListingDetailsComponent implements OnInit {
  listing?: Listing;

  // Modal state
  isSwapModalOpen = false;

  // Modal form fields
  swapMessage = '';
  swapStartDate = '';
  swapEndDate = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // If your MOCK_LISTINGS ids are numbers, change comparison accordingly
    this.listing = MOCK_LISTINGS.find(l => l.id === id);
  }

  openSwapModal() {
    this.isSwapModalOpen = true;
  }

  closeSwapModal() {
    this.isSwapModalOpen = false;
  }

  submitSwapRequest() {
    const request = {
      listingId: this.listing?.id,
      listingTitle: this.listing?.title,
      message: this.swapMessage,
      startDate: this.swapStartDate,
      endDate: this.swapEndDate,
      createdAt: new Date().toISOString(),
    };

    console.log('SWAP REQUEST:', request);

    // TODO (next): save to localStorage or call API
    // localStorage example later

    // Close modal
    this.closeSwapModal();

    // Reset form
    this.swapMessage = '';
    this.swapStartDate = '';
    this.swapEndDate = '';
  }
}