import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  constructor() { }
  getDataConf() {
    return [
      {
        prop: 'id'
      },
      {
        prop: 'age',
        name: 'Age'
      },
      {
        prop: 'name',
        name: 'Name'
      },
      {
        prop: 'gender',
        name: 'Gender'
      },
      {
        prop: 'company',
        name: 'Company'
      },
      {
        prop: 'M66',
        name: 'Email'
      },
      {
        prop: 'Frequency',
        name: 'Age'
      },
      {
        prop: 'Operating',
        name: 'Age'
      },
      {
        prop: 'Current',
        name: 'Age'
      },
      {
        prop: 'RPM',
        name: 'Age'
      },
      {
        prop: 'Flow',
        name: 'Age'
      },
      {
        prop: 'Voltage',
        name: 'Age'
      },
      {
        prop: 'PV',
        name: 'Age'
      },
      {
        prop: 'Input',
        name: 'Age'
      },
      {
        prop: 'Fault',
        name: 'Name'
      },
      {
        prop: 'INV',
        name: 'Name'
      },
      {
        prop: 'VFD',
        name: 'Name'
      },
      {
        prop: 'Today',
        name: 'Name'
      },
      {
        prop: 'soft',
        name: 'Name'
      },
    ];
  }
  getAll() {
    return [
      {
        'id': 0,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'JAMNATION',
        'email': 'mcleanbrady@jamnation.com',
        'phone': '+1 (875) 472-2061',
        'registered': '2014-10-20T04:54:00 -06:00'
      },
      {
        'id': 1,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'ACRODANCE',
        'email': 'dillonruiz@acrodance.com',
        'phone': '+1 (858) 562-2261',
        'registered': '2016-08-07T12:15:31 -06:00'
      },
      {
        'id': 2,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'GLUID',
        'email': 'robynknox@gluid.com',
        'phone': '+1 (826) 491-3098',
        'registered': '2017-02-12T02:43:39 -06:00'
      },
      {
        'id': 3,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'INTRADISK',
        'email': 'santanawagner@intradisk.com',
        'phone': '+1 (841) 550-2276',
        'registered': '2016-03-28T11:22:15 -06:00'
      },
      {
        'id': 4,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'VERAQ',
        'email': 'jenniebranch@veraq.com',
        'phone': '+1 (895) 483-3982',
        'registered': '2015-03-16T01:30:06 -06:00'
      },
      {
        'id': 5,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'HONOTRON',
        'email': 'farrellpreston@honotron.com',
        'phone': '+1 (993) 534-2843',
        'registered': '2015-08-14T09:07:47 -06:00'
      },
      {
        'id': 6,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'VIOCULAR',
        'email': 'garnerreyes@viocular.com',
        'phone': '+1 (973) 495-3873',
        'registered': '2016-03-23T03:47:23 -06:00'
      },
      {
        'id': 7,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'ARCHITAX',
        'email': 'ellaboone@architax.com',
        'phone': '+1 (945) 491-2580',
        'registered': '2015-07-01T09:35:10 -06:00'
      },
      {
        'id': 8,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'CYCLONICA',
        'email': 'kathrynowens@cyclonica.com',
        'phone': '+1 (978) 598-2767',
        'registered': '2014-03-11T11:38:12 -06:00'
      },
      {
        'id': 9,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'KAGGLE',
        'email': 'byerssantana@kaggle.com',
        'phone': '+1 (984) 546-3400',
        'registered': '2015-08-17T02:48:09 -06:00'
      },
      {
        'id': 10,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'ZINCA',
        'email': 'ninamiddleton@zinca.com',
        'phone': '+1 (829) 553-2060',
        'registered': '2014-12-20T09:53:27 -06:00'
      },
      {
        'id': 11,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'CUBIX',
        'email': 'nixonmorrow@cubix.com',
        'phone': '+1 (825) 501-3712',
        'registered': '2014-09-10T10:23:34 -06:00'
      },
      {
        'id': 12,
        'age': '7F-0135-0-13-06-23-0',
        'name': '2024-07-18 ',
        'gender': '16:38:07.303',
        'company': 'MAGNEATO',
        'email': 'bonitapate@magneato.com',
        'phone': '+1 (808) 497-3968',
        'registered': '2016-01-20T02:45:43 -06:00'
      },
      {
        'id': 13,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Amy Hyde',
        'gender': '16:38:07.303',
        'company': 'UNDERTAP',
        'email': 'amyhyde@undertap.com',
        'phone': '+1 (867) 555-2669',
        'registered': '2015-04-12T08:39:31 -06:00'
      },
      {
        'id': 14,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Cortez Camacho',
        'gender': '16:38:07.303',
        'company': 'IDEGO',
        'email': 'cortezcamacho@idego.com',
        'phone': '+1 (986) 546-3364',
        'registered': '2014-08-21T11:00:20 -06:00'
      },
      {
        'id': 15,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Castaneda Armstrong',
        'gender': '16:38:07.303',
        'company': 'INTERFIND',
        'email': 'castanedaarmstrong@interfind.com',
        'phone': '+1 (975) 557-2651',
        'registered': '2014-11-15T10:38:24 -06:00'
      },
      {
        'id': 16,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Liza West',
        'gender': '16:38:07.303',
        'company': 'COWTOWN',
        'email': 'lizawest@cowtown.com',
        'phone': '+1 (852) 415-2358',
        'registered': '2017-05-06T09:46:03 -06:00'
      },
      {
        'id': 17,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Roth Baird',
        'gender': '16:38:07.303',
        'company': 'RODEMCO',
        'email': 'rothbaird@rodemco.com',
        'phone': '+1 (840) 417-3313',
        'registered': '2015-04-18T10:58:50 -06:00'
      },
      {
        'id': 18,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Alexis Blackburn',
        'gender': '16:38:07.303',
        'company': 'PREMIANT',
        'email': 'alexisblackburn@premiant.com',
        'phone': '+1 (957) 576-2362',
        'registered': '2014-08-08T12:59:38 -06:00'
      },
      {
        'id': 19,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Sadie Tillman',
        'gender': '16:38:07.303',
        'company': 'DUOFLEX',
        'email': 'sadietillman@duoflex.com',
        'phone': '+1 (843) 499-3330',
        'registered': '2016-02-21T09:25:03 -06:00'
      },
      {
        'id': 20,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Sharron Conley',
        'gender': '16:38:07.303',
        'company': 'QUARMONY',
        'email': 'sharronconley@quarmony.com',
        'phone': '+1 (951) 459-2465',
        'registered': '2014-10-19T06:04:36 -06:00'
      },
      {
        'id': 21,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Jordan Mccoy',
        'gender': '16:38:07.303',
        'company': 'ACCUSAGE',
        'email': 'jordanmccoy@accusage.com',
        'phone': '+1 (825) 568-3296',
        'registered': '2017-01-27T01:53:02 -06:00'
      },
      {
        'id': 22,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Rene House',
        'gender': '16:38:07.303',
        'company': 'INSURETY',
        'email': 'renehouse@insurety.com',
        'phone': '+1 (838) 578-3190',
        'registered': '2015-11-07T10:07:58 -06:00'
      },
      {
        'id': 23,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Bernice Berry',
        'gender': '16:38:07.303',
        'company': 'ROCKYARD',
        'email': 'berniceberry@rockyard.com',
        'phone': '+1 (885) 466-2145',
        'registered': '2014-04-17T07:43:02 -06:00'
      },
      {
        'id': 24,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Bowen Beach',
        'gender': '16:38:07.303',
        'company': 'TETRATREX',
        'email': 'bowenbeach@tetratrex.com',
        'phone': '+1 (843) 493-3197',
        'registered': '2015-07-27T03:38:33 -06:00'
      },
      {
        'id': 25,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Monica Leblanc',
        'gender': '16:38:07.303',
        'company': 'TALENDULA',
        'email': 'monicaleblanc@talendula.com',
        'phone': '+1 (911) 524-2349',
        'registered': '2016-04-10T08:33:17 -06:00'
      },
      {
        'id': 26,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Lina Rivas',
        'gender': '16:38:07.303',
        'company': 'BOINK',
        'email': 'linarivas@boink.com',
        'phone': '+1 (983) 572-2470',
        'registered': '2014-08-28T09:44:32 -06:00'
      },
      {
        'id': 27,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Joyce Yang',
        'gender': '16:38:07.303',
        'company': 'SPORTAN',
        'email': 'joyceyang@sportan.com',
        'phone': '+1 (807) 491-3917',
        'registered': '2015-07-22T12:58:31 -06:00'
      },
      {
        'id': 28,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Lana Joseph',
        'gender': '16:38:07.303',
        'company': 'BOLAX',
        'email': 'lanajoseph@bolax.com',
        'phone': '+1 (942) 467-2363',
        'registered': '2016-10-30T06:13:50 -06:00'
      },
      {
        'id': 29,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Jimenez Guerrero',
        'gender': '16:38:07.303',
        'company': 'INSURON',
        'email': 'jimenezguerrero@insuron.com',
        'phone': '+1 (991) 585-3706',
        'registered': '2016-09-15T01:35:16 -06:00'
      },
      {
        'id': 30,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Williams Bentley',
        'gender': '16:38:07.303',
        'company': 'ZEAM',
        'email': 'williamsbentley@zeam.com',
        'phone': '+1 (837) 490-2610',
        'registered': '2014-01-06T01:04:11 -06:00'
      },
      {
        'id': 31,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Doreen Garrett',
        'gender': '16:38:07.303',
        'company': 'ENERSAVE',
        'email': 'doreengarrett@enersave.com',
        'phone': '+1 (920) 522-2847',
        'registered': '2017-01-25T03:24:47 -06:00'
      },
      {
        'id': 32,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Shaw Cannon',
        'gender': '16:38:07.303',
        'company': 'EBIDCO',
        'email': 'shawcannon@ebidco.com',
        'phone': '+1 (903) 530-2676',
        'registered': '2014-04-11T04:49:08 -06:00'
      },
      {
        'id': 33,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Sonya Skinner',
        'gender': '16:38:07.303',
        'company': 'EXOSWITCH',
        'email': 'sonyaskinner@exoswitch.com',
        'phone': '+1 (923) 428-3014',
        'registered': '2014-02-09T11:59:54 -06:00'
      },
      {
        'id': 34,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Todd Potter',
        'gender': '16:38:07.303',
        'company': 'MUSIX',
        'email': 'toddpotter@musix.com',
        'phone': '+1 (817) 491-2268',
        'registered': '2015-04-06T11:10:47 -06:00'
      },
      {
        'id': 35,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Celina Rose',
        'gender': '16:38:07.303',
        'company': 'TWIIST',
        'email': 'celinarose@twiist.com',
        'phone': '+1 (863) 599-2063',
        'registered': '2015-09-04T07:59:29 -06:00'
      },
      {
        'id': 36,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Ingrid Day',
        'gender': '16:38:07.303',
        'company': 'ZBOO',
        'email': 'ingridday@zboo.com',
        'phone': '+1 (921) 447-2312',
        'registered': '2016-10-01T08:26:07 -06:00'
      },
      {
        'id': 37,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Lynch Stark',
        'gender': '16:38:07.303',
        'company': 'PYRAMIA',
        'email': 'lynchstark@pyramia.com',
        'phone': '+1 (995) 431-2354',
        'registered': '2014-01-26T11:38:48 -06:00'
      },
      {
        'id': 38,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Helga Mendez',
        'gender': '16:38:07.303',
        'company': 'COMVEYER',
        'email': 'helgamendez@comveyer.com',
        'phone': '+1 (897) 418-3815',
        'registered': '2015-10-03T08:58:45 -06:00'
      },
      {
        'id': 39,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Corinne Calhoun',
        'gender': '16:38:07.303',
        'company': 'ADORNICA',
        'email': 'corinnecalhoun@adornica.com',
        'phone': '+1 (841) 564-3617',
        'registered': '2016-05-24T10:42:36 -06:00'
      },
      {
        'id': 40,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Winifred Conrad',
        'gender': '16:38:07.303',
        'company': 'SATIANCE',
        'email': 'winifredconrad@satiance.com',
        'phone': '+1 (885) 533-2416',
        'registered': '2017-03-01T06:12:08 -06:00'
      },
      {
        'id': 41,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Lawanda Stevenson',
        'gender': '16:38:07.303',
        'company': 'ZILLACTIC',
        'email': 'lawandastevenson@zillactic.com',
        'phone': '+1 (823) 535-3187',
        'registered': '2014-07-07T05:26:22 -06:00'
      },
      {
        'id': 42,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Kirsten Long',
        'gender': '16:38:07.303',
        'company': 'IMAGEFLOW',
        'email': 'kirstenlong@imageflow.com',
        'phone': '+1 (809) 592-2264',
        'registered': '2014-05-08T07:41:56 -06:00'
      },
      {
        'id': 43,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Summer Farley',
        'gender': '16:38:07.303',
        'company': 'ENTOGROK',
        'email': 'summerfarley@entogrok.com',
        'phone': '+1 (814) 490-3578',
        'registered': '2016-10-28T10:02:34 -06:00'
      },
      {
        'id': 44,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Mendoza Randall',
        'gender': '16:38:07.303',
        'company': 'COREPAN',
        'email': 'mendozarandall@corepan.com',
        'phone': '+1 (846) 501-2860',
        'registered': '2015-12-14T12:58:18 -06:00'
      },
      {
        'id': 45,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Marcy Doyle',
        'gender': '16:38:07.303',
        'company': 'VORATAK',
        'email': 'marcydoyle@voratak.com',
        'phone': '+1 (848) 411-2728',
        'registered': '2014-02-12T10:46:27 -06:00'
      },
      {
        'id': 46,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Burch Walker',
        'gender': '16:38:07.303',
        'company': 'COMVEYOR',
        'email': 'burchwalker@comveyor.com',
        'phone': '+1 (968) 445-2104',
        'registered': '2014-01-07T05:16:30 -06:00'
      },
      {
        'id': 47,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Solis Lester',
        'gender': '16:38:07.303',
        'company': 'MACRONAUT',
        'email': 'solislester@macronaut.com',
        'phone': '+1 (857) 422-3242',
        'registered': '2016-10-20T09:40:51 -06:00'
      },
      {
        'id': 48,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Lorene Mooney',
        'gender': '16:38:07.303',
        'company': 'ORGANICA',
        'email': 'lorenemooney@organica.com',
        'phone': '+1 (853) 406-2716',
        'registered': '2015-09-17T03:54:41 -06:00'
      },
      {
        'id': 49,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Rhodes Vega',
        'gender': '16:38:07.303',
        'company': 'CHILLIUM',
        'email': 'rhodesvega@chillium.com',
        'phone': '+1 (863) 577-3562',
        'registered': '2016-06-15T05:36:10 -06:00'
      },
      {
        'id': 50,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Pruitt Merrill',
        'gender': '16:38:07.303',
        'company': 'KYAGURU',
        'email': 'pruittmerrill@kyaguru.com',
        'phone': '+1 (910) 585-3659',
        'registered': '2017-04-02T09:36:00 -06:00'
      },
      {
        'id': 51,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Bernadine Hart',
        'gender': '16:38:07.303',
        'company': 'BITTOR',
        'email': 'bernadinehart@bittor.com',
        'phone': '+1 (906) 446-3518',
        'registered': '2015-11-10T07:45:59 -06:00'
      },
      {
        'id': 52,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Carver Mckenzie',
        'gender': '16:38:07.303',
        'company': 'LOCAZONE',
        'email': 'carvermckenzie@locazone.com',
        'phone': '+1 (803) 407-3142',
        'registered': '2015-06-24T07:16:02 -06:00'
      },
      {
        'id': 53,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Dean Cobb',
        'gender': '16:38:07.303',
        'company': 'ASSISTIA',
        'email': 'deancobb@assistia.com',
        'phone': '+1 (877) 539-3346',
        'registered': '2016-12-02T01:14:47 -06:00'
      },
      {
        'id': 54,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Camacho Robinson',
        'gender': '16:38:07.303',
        'company': 'INSURITY',
        'email': 'camachorobinson@insurity.com',
        'phone': '+1 (929) 430-3079',
        'registered': '2016-12-14T08:59:33 -06:00'
      },
      {
        'id': 55,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Nancy Rodgers',
        'gender': '16:38:07.303',
        'company': 'COSMOSIS',
        'email': 'nancyrodgers@cosmosis.com',
        'phone': '+1 (873) 489-2643',
        'registered': '2014-08-21T02:19:28 -06:00'
      },
      {
        'id': 56,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'June Henry',
        'gender': '16:38:07.303',
        'company': 'PETIGEMS',
        'email': 'junehenry@petigems.com',
        'phone': '+1 (808) 536-2445',
        'registered': '2014-03-28T08:36:27 -06:00'
      },
      {
        'id': 57,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Rochelle Simmons',
        'gender': '16:38:07.303',
        'company': 'DANJA',
        'email': 'rochellesimmons@danja.com',
        'phone': '+1 (936) 563-3886',
        'registered': '2015-12-07T08:01:18 -06:00'
      },
      {
        'id': 58,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Alice Thornton',
        'gender': '16:38:07.303',
        'company': 'ISOSURE',
        'email': 'alicethornton@isosure.com',
        'phone': '+1 (962) 560-2318',
        'registered': '2015-06-07T08:09:50 -06:00'
      },
      {
        'id': 59,
        'age': '7F-0135-0-13-06-23-0',
        'name': 'Clara Downs',
        'gender': '16:38:07.303',
        'company': 'ZANILLA',
        'email': 'claradowns@zanilla.com',
        'phone': '+1 (977) 595-2657',
        'registered': '2015-06-14T02:33:33 -06:00'
      }
    ]
  }

}
