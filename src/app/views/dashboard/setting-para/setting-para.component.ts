import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'app/shared/services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting-para',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './setting-para.component.html',
  styleUrls: ['./setting-para.component.scss'],
})
export class SettingParaComponent implements OnInit {
  apiData: any = null;
  selectedCategory: any = null; 
  isLoading:boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSharedData().subscribe((data) => {
      if (data) {
        this.apiData = data;
        this.selectedCategory = this.apiData.response[0];

        this.apiData.response.forEach((category: any) => {
          category.parameterList.forEach((param: any) => {
            param.editable = false;
            param.result = '';
            param.isLoading = false;
          });
        });
        console.log('Received Data:', this.apiData);
      }
    });
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  async readAllParameters() {
    if (!this.selectedCategory || !this.selectedCategory.parameterList) {
      console.warn('No parameters available to read.');
      return;
    }
    this.isLoading = true;
    for (const param of this.selectedCategory.parameterList) {
      await this.readParameter(param);
    }

    this.isLoading = false;
  }
  readParameter(param: any): Promise<void> {
    return new Promise((resolve) => {
      // this.isLoading = true;

      const requestBody = new FormData();
      requestBody.append('address1', param.PAddress || '');
      requestBody.append('offset1', '0');
      requestBody.append('NewGateway', 'true');
      requestBody.append('did1', '7f-0135-0-13-06-23-0');
      requestBody.append('RW', '1');
      requestBody.append('data1', '0');
      requestBody.append('OldData', '0');
      requestBody.append('DeviceType', '7F');
      requestBody.append('UserId', '1026');
      requestBody.append('IPAddress', '');

      this.dataService.readParameter(requestBody).subscribe(
        (response) => {
          console.log('Read API Response:', response);
          param.editable = true;
          param.isLoading = false;

          if (response?.response) {
            param.result = response.response.result || 'Failed';
// "35" !== 35 true
            if (response.response.value === null) {
              param.value = 'null';
            } else if (response.response.value !== undefined) {
              param.value = response.response.value;
            } else {
              console.warn('Value is undefined in API response');
              param.value = 'N/A';
            }
          } else {
            param.result = 'No Response';
          }
          resolve();
        },
        (error) => {
          console.error('Read API Error:', error);
          param.result = 'Error';
          param.editable = true;
          param.isLoading = false; // Hide loader
          resolve();
        }
      );
    });
  }

  setParameter(param: any) {
    param.isLoading = true;
    const requestBody = new FormData();
    requestBody.append('address1', param.PAddress || '');
    requestBody.append('offset1', '1');
    requestBody.append('NewGateway', 'true');
    requestBody.append('did1', '7f-0135-0-13-06-23-0');
    requestBody.append('RW', '1');
    requestBody.append('data1', param.value);
    requestBody.append('OldData', '0');
    requestBody.append('DeviceType', '7F');
    requestBody.append('UserId', '1026');
    requestBody.append('IPAddress', '');

    this.dataService.setParameter(requestBody).subscribe(
      (response) => {
        console.log('Set API Response:', response);
        param.result = response?.result || 'Failed';
        param.isLoading = false;
      },
      (error) => {
        console.error('Set API Error:', error);
        param.result = 'Error';
        param.isLoading = false;
      }
    );
  }
}



// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DataService } from 'app/shared/services/data.service';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-setting-para',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './setting-para.component.html',
//   styleUrls: ['./setting-para.component.scss'],
// })
// export class SettingParaComponent implements OnInit {
//   apiData: any = null;
//   selectedCategory: any = null;

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.dataService.getSharedData().subscribe((data) => {
//       if (data) {
//         this.apiData = data;
//         this.selectedCategory = this.apiData.response[0];

//         this.apiData.response.forEach((category: any) => {
//           category.parameterList.forEach((param: any) => {
//             param.editable = false;
//             param.result = '';
//           });
//         });
//         console.log('Received Data:', this.apiData);
//       }
//     });
//   }

//   getKeys(obj: any): string[] {
//     return obj ? Object.keys(obj) : [];
//   }

//   selectCategory(category: any) {
//     this.selectedCategory = category;
//   }

//   readParameter(param: any) {
//     const requestBody = new FormData();
//     requestBody.append('address1', param.PAddress || '');
//     console.log('Address: ', param.PAddress);
//     requestBody.append('offset1', '0');
//     requestBody.append('NewGateway', 'true');
//     requestBody.append('did1', '7f-0135-0-13-06-23-0');
//     requestBody.append('RW', '1');
//     requestBody.append('data1', '0');
//     requestBody.append('OldData', '0');
//     requestBody.append('DeviceType', '7F');
//     requestBody.append('UserId', '1026');
//     requestBody.append('IPAddress', '');

//     this.dataService.readParameter(requestBody).subscribe(
//       (response) => {
//         console.log('Read API Response:', response);
//         param.editable = true;

//         if (response?.response) {
//           param.result = response.response.result || 'Failed';

//           if (response.response.value === null) {
//             param.value = 'null';
//           } else if (response.response.value !== undefined) {
//             param.value = response.response.value;
//           } else {
//             console.warn('Value is undefined in API response');
//             param.value = 'N/A';
//           }
//           console.log('Final Value: ', param.value);
//         } else {
//           param.result = 'No Response';
//         }
//       },
//       (error) => {
//         console.error('Read API Error:', error);
//         param.result = 'Error';
//         param.editable = true;
//       }
//     );
//   }
//   setParameter(param: any) {
//     const requestBody = new FormData();
//     requestBody.append('address1', param.PAddress || '');
//     requestBody.append('offset1', '1');
//     requestBody.append('NewGateway', 'true');
//     requestBody.append('did1', '7f-0135-0-13-06-23-0');
//     requestBody.append('RW', '1');
//     requestBody.append('data1', param.value);
//     requestBody.append('OldData', '0');
//     requestBody.append('DeviceType', '7F');
//     requestBody.append('UserId', '1026');
//     requestBody.append('IPAddress', '');

//     this.dataService.setParameter(requestBody).subscribe(
//       (response) => {
//         console.log('Set API Response:', response);
//         param.result = response?.result || 'Failed';
//       },
//       (error) => {
//         console.error('Set API Error:', error);
//         param.result = 'Error';
//       }
//     );
//   }
// }

