import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  readData: any;
  successmsg: any;
  searchTerm: string = '';
  sortBy: string = '';
  sortField: string = '';

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.service.getAllData().subscribe((res) => {
      this.readData = res.data;
      // Call search() function after getting all data
      this.search();
    });
  }

  deleteID(id: any) {
    console.log(id, 'deletedId==>');
    if (window.confirm('Are you sure, you want to delete?')) {
      this.service.deleteData(id).subscribe((res) => {
        console.log(res, 'deleteres==>')
        this.successmsg = res.message;
        this.getAllData();
      });
    }
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      // Filter the data based on the search term
      this.readData = this.readData.filter((data: any) => {
        return data.title.toLowerCase().includes(this.searchTerm.toLowerCase())
          || data.category.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
    // Call sortByRating() function after filtering the data
    this.sortByRating(this.sortBy);
  }

  sortByRating(sortBy: string) {
    // Set sortBy property
    this.sortBy = sortBy;
    // Sort the data based on the sortBy property
    this.readData.sort((a: any, b: any) => {
      return b[sortBy] - a[sortBy];
    
    });
  }
  resetSorting() {
    this.sortBy = '';
    this.getAllData();
  }
}
