import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-setting-para',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setting-para.component.html',
  styleUrls: ['./setting-para.component.scss'],
})
export class SettingParaComponent implements OnInit {
  apiData: any = null;
  selectedCategory: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSharedData().subscribe((data) => {
      if (data) {
        this.apiData = data;
        this.selectedCategory = this.apiData.response[0];
        console.log('Received Data:', this.apiData);
      }
    });
  }

  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
  }
}



// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DataService } from 'app/shared/services/data.service';

// @Component({
//   selector: 'app-setting-para',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './setting-para.component.html',
//   styleUrls: ['./setting-para.component.scss'],
// })
// export class SettingParaComponent implements OnInit {
//   apiData: any = null;

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.dataService.getSharedData().subscribe((data) => {
//       if (data) {
//         this.apiData = data;
//         console.log('Received Data:', this.apiData);
//       }
//     });
//   }

//   getKeys(obj: any): string[] {
//     return obj ? Object.keys(obj) : [];
//   }
// }
