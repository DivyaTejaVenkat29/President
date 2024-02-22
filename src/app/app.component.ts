import { Component, OnInit } from '@angular/core';
import { CartoonservicesService } from './cartoonservices.service';
import { SearchServiceService } from './search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'presidents of united states of america';
  cartoons: any[] = [];
  isDarkMode: boolean = false;
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10; // Number of presidents per page
  totalPages: number = 0;

  constructor(private c: CartoonservicesService, private searchService: SearchServiceService) {}

  ngOnInit() {
    this.c.getData().subscribe((data: any) => {
      this.cartoons = data;
      this.totalPages = Math.ceil(this.cartoons.length / this.pageSize);
    });

    this.searchService.getSearchTerm().subscribe(term => {
      this.searchTerm = term;
      // Reset currentPage when the search term changes
      this.currentPage = 1;
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  get filteredCartoons() {
    // Filter the cartoons based on the search term
    let filtered = this.cartoons.filter(c => c.name.toLowerCase().includes(this.searchTerm.toLowerCase()));

    // Calculate the start and end index based on the current page and pageSize
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    // Slice the filtered array based on the start and end index
    filtered = filtered.slice(startIndex, endIndex);

    return filtered;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  updateSearchTerm() {
    this.searchService.setSearchTerm(this.searchTerm);
  }
}
