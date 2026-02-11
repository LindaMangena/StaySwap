export interface Listing {
  id: string;
  title: string;
  city: string;
  suburb: string;
  bedrooms: number;
  maxGuests: number;
  imageUrl: string;
  availableFrom: string; // YYYY-MM-DD
  availableTo: string;   // YYYY-MM-DD
}