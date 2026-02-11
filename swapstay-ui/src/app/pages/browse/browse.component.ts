import { Component } from '@angular/core';
import { Listing } from './listing.model';
import { MOCK_LISTINGS } from './mock-listings';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent {
  // ===============================
  // Listings
  // ===============================
  listings: Listing[] = MOCK_LISTINGS;

  search = '';
  city = 'All';

  // ===============================
  // Swap Modal State
  // ===============================
  isSwapModalOpen = false;
  selectedListing?: Listing;

  swapMessage = '';
  swapStartDate = '';
  swapEndDate = '';

  // ===============================
  // Filters
  // ===============================
  get cities(): string[] {
    const unique = Array.from(new Set(this.listings.map(l => l.city)));
    return ['All', ...unique];
  }

  get filteredListings(): Listing[] {
    return this.listings.filter(l => {
      const matchesCity = this.city === 'All' ? true : l.city === this.city;
      const text = `${l.title} ${l.city} ${l.suburb}`.toLowerCase();
      const matchesSearch = text.includes(this.search.toLowerCase().trim());
      return matchesCity && matchesSearch;
    });
  }

  // ===============================
  // Swap Modal Actions
  // ===============================
  openSwapModal(listing: Listing): void {
    this.selectedListing = listing;
    this.isSwapModalOpen = true;
  }

  closeSwapModal(): void {
    this.isSwapModalOpen = false;
    this.selectedListing = undefined;

    this.swapMessage = '';
    this.swapStartDate = '';
    this.swapEndDate = '';
  }

  submitSwapRequest(): void {
    const request = {
      listingId: this.selectedListing?.id,
      listingTitle: this.selectedListing?.title,
      message: this.swapMessage,
      startDate: this.swapStartDate,
      endDate: this.swapEndDate,
      createdAt: new Date().toISOString(),
    };

    // For now just log it (later this goes to API)
    console.log('SWAP REQUEST FROM BROWSE:', request);

    this.closeSwapModal();
  }
}