// cumulative.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-cumulative',
  standalone:true,
  templateUrl: './cumulative.component.html',
  styleUrl: './cumulative.component.scss',
  imports:[]
})
export class CumulativeComponent implements OnInit {
  @Input() deviceNo!: string;
  @Input() startDate!: string;
  @Input() endDate!: string;
  
  cumulativeData: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.cumulativeData$.subscribe((data) => {
      if (data) {
        this.cumulativeData = data;
        console.log("Received cumulative data in component:", this.cumulativeData);
      }
    });
  }
}


// import { Component, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
// import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
// import { MatTableModule } from '@angular/material/table';
// import { TablesService } from '../tables.service';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import * as moment from 'moment';

// @Component({
//   selector: 'app-cumulative',
//   standalone: true,
//   imports: [PerfectScrollbarModule, MatTableModule, MatPaginator],
//   templateUrl: './cumulative.component.html',
//   styleUrl: './cumulative.component.scss'
// })
// export class CumulativeComponent implements AfterViewInit, OnChanges {

//   cumulativeData: any[] = [];
//   displayedColumns: string[] = [];
//   dataSource = new MatTableDataSource<any>();

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   @Input() deviceNo!: string;
//   @Input() startDate!: string;
//   @Input() endDate!: string;

//   constructor(private tableService: TablesService) { }

//   ngOnInit() {
//     this.displayedColumns = this.tableService.getCummuConf().map((col) => col.prop);
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes.deviceNo || changes.startDate || changes.endDate) {
//       this.fetchCumulativeData();
//     }
//   }

//   fetchCumulativeData() {
//     if (!this.deviceNo || !this.startDate || !this.endDate) {
//       console.warn('Missing required input values!');
//       return;
//     }

//     const requestData = {
//       DeviceNo: this.deviceNo,
//       startDate: moment(this.startDate).format("MM/DD/YYYY"),
//       endDate: moment(this.endDate).format("MM/DD/YYYY"),
//       deviceType: '7F',
//       ClientIdList: '2, 3, 2411, 15, 24, 12, 6, 10, 5, 11, 29, 80, 2210, 2322, 377, 2001, 674, 2120, 2305, 2241, 2304, 2336, 2295, 2032, 2307, 2303, 2406, 2410, 7, 4, 9, 8, 16',
//     };

//     this.tableService.getCumulativeData(requestData).subscribe((data) => {
//       if (data && data.length) {
//         this.cumulativeData = data;
//         this.dataSource.data = data;
//         console.log('Cumulative Data Loaded:', data);
//       } else {
//         console.warn('No data received from API');
//       }
//     });
//   }
// }



// import {
//   Component,
//   ViewChild,
//   AfterViewInit,
//   Input,
//   OnChanges,
//   SimpleChanges,
// } from '@angular/core';
// import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
// import { MatTableModule } from '@angular/material/table';
// import { TablesService } from '../tables.service';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import * as moment from 'moment';

// @Component({
//   selector: 'app-cumulative',
//   standalone: true,
//   imports: [PerfectScrollbarModule, MatTableModule, MatPaginator],
//   templateUrl: './cumulative.component.html',
//   styleUrl: './cumulative.component.scss',
// })
// export class CumulativeComponent implements AfterViewInit, OnChanges {
//   cumulativeData: any[] = [];
//   displayedColumns: string[] = [];
//   dataSource = new MatTableDataSource<any>();

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   @Input() deviceNo: string = ''; 
//   @Input() startDate: string = ''; 
//   @Input() endDate: string = ''; 

//   constructor(private tableService: TablesService) {}

//   ngOnInit() {
//     this.fetchCumulativeData();
//     this.displayedColumns = this.tableService
//       .getCummuConf()
//       .map((col) => col.prop);
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes.deviceNo || changes.startDate || changes.endDate) {
//       console.log('Fetching cumulative data for:', this.deviceNo, this.startDate, this.endDate);
//       this.fetchCumulativeData();
//     }
//   }

//   // fetchCumulativeData() {
//   //   const requestData = {
//   //     DeviceNo: this.deviceNo,
//   //     startDate: this.startDate,
//   //     endDate: this.endDate,
//   //     deviceType: '7F',
//   //     ClientIdList:
//   //       '2, 3, 2411, 15, 24, 12, 6, 10, 5, 11, 29, 80, 2210, 2322, 377, 2001, 674, 2120, 2305, 2241, 2304, 2336, 2295, 2032, 2307, 2303, 2406, 2410, 7, 4, 9, 8, 16',
//   //   };

//   fetchCumulativeData() {
//     const requestData = {
//       DeviceNo: this.deviceNo,
//       startDate: this.startDate,
//       endDate: this.endDate,
//       deviceType: '7F',
//       ClientIdList: [
//         2, 3, 2411, 15, 24, 12, 6, 10, 5, 11, 29, 80, 2210, 2322, 377,
//         2001, 674, 2120, 2305, 2241, 2304, 2336, 2295, 2032, 2307, 2303, 2406, 2410, 7, 4, 9, 8, 16
//       ], // Ensure this is an array
//     };
//     this.tableService.fetchCumulativeData(requestData);

//     this.tableService.apiResponse$2.subscribe((data) => {
//       if (Array.isArray(data)) {
//         this.cumulativeData = data;
//         this.dataSource.data = data;
//         console.log('Cumulative Data Loaded:', data);
//       } else {
//         console.warn('No cumulative data available.',data);
//       }
//     });
//   }
// }

// import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
// import { MatTableModule } from '@angular/material/table';
// import { TablesService } from '../tables.service';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

// @Component({
//   selector: 'app-cumulative',
//   standalone: true,
//   imports: [PerfectScrollbarModule, MatTableModule, MatPaginator],
//   templateUrl: './cumulative.component.html',
//   styleUrl: './cumulative.component.scss'
// })
// export class CumulativeComponent implements OnInit, AfterViewInit {

//   cumulativeData: any[] = [];
//   displayedColumns: string[] = [];
//   dataSource = new MatTableDataSource<any>();

//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(private tableService: TablesService) { }

//   ngOnInit() {
//     this.displayedColumns = this.tableService.getCummuConf().map((col) => col.name);

//     // API Payload
//     const requestData = {
//       DeviceNo: '7F-0135-0-13-06-23-0',
//       startDate: '03/08/2025',
//       endDate: '03/08/2025',
//       deviceType: '7F',
//       ClientIdList: '2, 3, 2411, 15, 24, 12, 6, 10, 5, 11, 29, 80, 2210, 2322, 377, 2001, 674, 14, 13, 394, 483, 105, 25, 73, 2240, 87, 2177, 17, 2018, 553, 2019, 304, 135, 90, 78, 77, 325, 149, 284, 260, 142, 261, 326, 262, 125, 263, 311, 285, 290, 252, 286, 287, 314, 298, 2249, 424, 175, 332, 161, 2246, 318, 127, 264, 327, 343, 144, 155, 265, 266, 324, 2270, 267, 79, 171, 2346, 2271, 2347, 268, 291, 328, 19, 100, 269, 270, 128, 312, 288, 156, 66, 379, 259, 151, 271, 256, 138, 272, 302, 250, 380, 273, 99, 274, 115, 790, 22, 2273, 275, 301, 167, 317, 295, 101, 276, 121, 169, 166, 289, 119, 122, 133, 277, 154, 41, 40, 278, 120, 344, 2248, 319, 68, 27, 96, 93, 21, 313, 322, 333, 345, 58, 94, 130, 157, 150, 321, 159, 165, 136, 42, 140, 323, 81, 279, 249, 23, 163, 320, 170, 74, 651, 64, 131, 158, 280, 117, 293, 152, 281, 282, 292, 137, 283, 251, 535, 428, 427, 710, 644, 625, 2096, 590, 1889, 2015, 643, 352, 2043, 408, 628, 1848, 362, 709, 447, 759, 2360, 2239, 2288, 2207, 471, 588, 2247, 2337, 1929, 2100, 1851, 497, 2160, 612, 2119, 467, 834, 376, 2225, 2292, 568, 477, 505, 2388, 635, 457, 533, 2200, 2205, 2178, 534, 693, 648, 2067, 2392, 490, 504, 2054, 432, 758, 705, 2370, 2245, 366, 2214, 373, 2114, 2176, 525, 605, 2343, 561, 2314, 2122, 2090, 637, 614, 613, 698, 1898, 2055, 547, 2124, 2000, 431, 2408, 2194, 124, 495, 1966, 2014, 1972, 2130, 2155, 2156, 649, 616, 2315, 491, 573, 2048, 2231, 2325, 436, 348, 2188, 378, 2351, 679, 2401, 2243, 2157, 514, 442, 822, 752, 2094, 258, 118, 465, 2226, 558, 2064, 619, 65, 82, 43, 59, 69, 2113, 802, 2377, 1930, 2357, 808, 2339, 1935, 390, 458, 2146, 2196, 358, 2391, 560, 2242, 422, 804, 466, 815, 354, 596, 355, 2021, 2068, 1975, 2059, 445, 1946, 2079, 2126, 762, 2179, 438, 1934, 577, 2335, 2299, 464, 439, 1985, 2312, 2348, 692, 385, 806, 2281, 2058, 2013, 2291, 552, 494, 86, 632, 575, 2125, 2187, 2186, 141, 423, 699, 459, 2384, 2371, 2338, 2121, 549, 1940, 597, 2375, 582, 532, 2234, 418, 583, 1974, 2378, 357, 2383, 91, 479, 489, 591, 370, 2166, 1899, 539, 2069, 682, 2116, 2097, 2278, 463, 2403, 572, 2301, 2300, 145, 501, 2227, 731, 2362, 789, 681, 564, 513, 2355, 2385, 794, 433, 502, 2190, 383, 177, 134, 2298, 496, 807, 607, 2115, 702, 492, 437, 2099, 448, 799, 803, 363, 825, 703, 630, 410, 297, 296, 310, 329, 20, 129, 116, 2287, 1903, 2274, 2182, 257, 685, 2198, 356, 2213, 2302, 2204, 441, 368, 2047, 2005, 2152, 2356, 1936, 434, 1977, 2045, 652, 2341, 2169, 456, 2197, 2220, 2218, 351, 2065, 2183, 2358, 2380, 548, 360, 686, 780, 1991, 511, 639, 2272, 641, 425, 2091, 1928, 2193, 2376, 2318, 795, 2158, 690, 2010, 2206, 2332, 2321, 446, 609, 646, 2118, 2033, 349, 2282, 359, 2034, 2035, 330, 393, 2334, 2061, 2389, 2317, 476, 2201, 2268, 2189, 179, 2219, 2313, 554, 493, 1990, 2011, 1913, 645, 2171, 2175, 2294, 2192, 413, 2333, 688, 2404, 2345, 813, 2359, 1952, 1986, 2089, 2285, 735, 2311, 2168, 2060, 544, 832, 826, 1964, 1965, 126, 2363, 435, 2150, 1938, 389, 2144, 449, 1933, 443, 2211, 2402, 2382, 2276, 691, 2170, 2340, 2216, 2208, 800, 2165, 2233, 2342, 2232, 2280, 1993, 2215, 2095, 2092, 2195, 2293, 2308, 387, 2326, 2031, 2393, 2310, 2286, 2277, 2063, 1994, 2062, 2405, 2327, 67, 647, 763, 2180, 2309, 2174, 524, 2029, 2407, 2395, 2244, 2353, 482, 540, 2202, 589, 371, 2354, 2306, 2159, 664, 411, 451, 475, 546, 559, 541, 777, 2399, 516, 2070, 2030, 522, 414, 2352, 2390, 2056, 2316, 421, 347, 2349, 640, 2386, 374, 2320, 2397, 2164, 342, 2283, 761, 2364, 2007, 2344, 2398, 2191, 384, 2381, 2038, 584, 2275, 2163, 386, 2088, 617, 405, 388, 2209, 367, 2199, 2223, 1947, 574, 1973, 517, 1976, 485, 526, 353, 444, 2350, 581, 406, 2409, 39, 38, 796, 538, 764, 18, 2367, 2369, 2366, 2368, 2365, 2400, 176, 2151, 2123, 2004, 536, 531, 478, 2087, 486, 545, 1932, 2145, 254, 350, 515, 253, 255, 512, 2044, 1967, 2185, 760, 1937, 338, 556, 361, 543, 2203, 595, 335, 624, 2284, 336, 550, 1917, 1988, 1897, 1931, 555, 2296, 339, 2161, 753, 2009, 2162, 631, 2212, 407, 2361, 419, 618, 634, 675, 440, 2057, 337, 340, 474, 2279, 412, 2269, 551, 638, 1989, 341, 2008, 633, 375, 678, 2154, 429, 683, 2147, 704, 757, 523, 2394, 2046, 417, 620, 2297, 2016, 450, 670, 793, 510, 604, 2037, 455, 2117, 687, 2181, 305, 503, 576, 484, 2022, 2023, 821, 294, 454, 299, 2024, 2025, 97, 2026, 2027, 650, 37, 95, 139, 153, 83, 569, 147, 598, 461, 36, 307, 520, 364, 2222, 2217, 2221, 44, 530, 415, 2228, 2229, 537, 623, 416, 372, 603, 2237, 1850, 45, 46, 47, 181, 48, 104, 49, 70, 50, 51, 52, 53, 54, 60, 55, 75, 61, 820, 63, 76, 98, 107, 92, 629, 111, 62, 56, 642, 57, 148, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 2230, 2006, 365, 527, 671, 521, 308, 346, 2235, 500, 653, 2071, 805, 306, 1992, 836, 2080, 2081, 2136, 2082, 2072, 2101, 2106, 2073, 2107, 2074, 2108, 2109, 2110, 2075, 2102, 2111, 2076, 2137, 2138, 2083, 2139, 2084, 2085, 2112, 2077, 2086, 2104, 2140, 2105, 2141, 2142, 2143, 2149, 835, 2053, 1968, 2148, 694, 792, 1927, 706, 668, 663, 677, 1891, 655, 660, 659, 684, 661, 676, 755, 657, 797, 672, 1853, 756, 673, 680, 1852, 656, 654, 1892, 829, 798, 830, 801, 689, 662, 658, 499, 452, 487, 488, 453, 507, 498, 518, 315, 734, 2173, 775, 28, 2319, 754, 732, 468, 2020, 1846, 31, 89, 178, 460, 32, 33, 334, 481, 35, 102, 316, 369, 409, 88, 34, 426, 480, 30, 2039, 1995, 2042, 2041, 1959, 823, 1996, 1854, 1896, 810, 1956, 1957, 1855, 1961, 828, 778, 1847, 1963, 833, 1901, 814, 1900, 816, 824, 1997, 1904, 1955, 776, 2040, 817, 1998, 818, 1960, 811, 838, 827, 779, 1849, 1954, 809, 1958, 1962, 1893, 1894, 1905, 1953, 819, 1999, 812, 399, 400, 430, 404, 403, 508, 401, 396, 397, 402, 398, 395, 519, 462, 2267, 608, 599, 2238, 542, 578, 579, 2133, 1902, 529, 2049, 528, 2134, 2103, 2135, 733, 2153, 2036, 2051, 2052, 2387, 837, 2224, 570, 621, 331, 557, 2066, 2184, 469, 610, 509, 84, 2236, 2167, 506, 2050, 2132, 2017, 2131, 160, 2098, 2290, 470, 2012, 2289, 2329, 2330, 2372, 2373, 2331, 2374, 2328, 420, 391, 392, 571, 26, 309, 113, 472, 2078, 707, 2379, 143, 665, 1970, 846, 626, 109, 831, 667, 601, 1890, 2002, 586, 108, 593, 562, 627, 146, 168, 381, 2250, 2323, 700, 600, 697, 696, 701, 2324, 2257, 2264, 2263, 2258, 2266, 2256, 2262, 2259, 2265, 2252, 2255, 2261, 2254, 2251, 2260, 2253, 382, 781, 782, 783, 784, 785, 786, 787, 788, 1914, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 730, 729, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 747, 748, 749, 750, 751, 765, 766, 767, 768, 769, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1942, 1943, 1944, 1945, 565, 1925, 1922, 1951, 1920, 566, 580, 611, 839, 840, 1980, 1981, 1982, 1983, 1984, 770, 771, 772, 773, 774, 842, 1923, 1987, 1921, 843, 636, 1978, 1949, 1924, 841, 845, 844, 1919, 1916, 1918, 1941, 1979, 1915, 1948, 1926, 567, 2093, 1950, 563, 1969, 2127, 2128, 2129, 594, 303, 132, 300, 180, 592, 587, 2003, 602, 669, 1939, 2028, 1971, 666, 695, 708, 110, 606, 473, 791, 114, 585, 2396, 2120, 2305, 2241, 2304, 2336, 2295, 2032, 2307, 2303, 2406, 2410, 7, 4, 9, 8, 16',
//     };

//     // Call API
//     this.tableService.getCumulativeData(requestData);
//     this.tableService.apiResponse$.subscribe((data) => {
//       if (data && data.length) {
//         this.cumulativeData = data;
//         this.dataSource.data = data;
//       } else {
//         console.warn('No data received from API');
//       }
//     });
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }
// }
