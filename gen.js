const fs = require('fs');
const cp = require('cp');

const comps = ['Button', 'Chart', 'CheckboxGroup', 'Checkout', 'CheckoutBillingInfo', 'CheckoutItemsDetail', 'CheckoutPersonalInfo', 'Chip', 'Colors', 'ContactAndPhoneInfo', 'CurrencySelector', 'ExpansionPanel', 'FareDetail', 'FlightClusterRoute', 'FlightClusterRouteOption', 'FlightSearchBox', 'FlightsComparisonTable', 'Footer', 'Header', 'Icon', 'InputBirthday', 'InputCheckbox', 'InputDate', 'InputNumber', 'InputRadio', 'InputText', 'JustOne', 'Link', 'List', 'Logo', 'Nav', 'NumberGroup', 'Paginate', 'Price', 'PriceTrendCalendar', 'PriceTrendTableByDate', 'ProductCard', 'PurchaseAccess', 'RadioGroup', 'SearchResultsPlaceHolder', 'Select', 'Signup', 'Slider', 'Subscribe', 'Tabs', 'Test', 'Text', 'TextContent', 'Translations', 'TripSubscribe'];

comps.map(c=>{
  const avtPath = __dirname + '/src/avantrip/' + c;
  const globalPath = __dirname + '/src/global/' + c;
  // console.log(c);

  // fs.mkdir(avtPath, ()=>{})

//   const fileContent = `
// import React from 'react';
// import Global${c} from '../../global/${c}';
// import { ThemeProvider } from 'styled-components';
//
// const componentTheme = {}
//
// export default (props) => (
//   <ThemeProvider theme={componentTheme}>
//     <Global${c} {...props} />
//   </ThemeProvider>
// )
//
//   `
//   fs.writeFile(avtPath + '/index.js', fileContent, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

  // cp(globalPath+'/README.md', avtPath+'/README.md', ()=>{})
  // cp(globalPath+'/stories.js', avtPath+'/stories.js', ()=>{})
})
