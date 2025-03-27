'use strict';

// Promise syntax
// Refresh the browser several times unless it generates different numbers to be passed through the if check
function mySetTimeOut(delay) {
  return new Promise((resolve, reject) => {
    if (Math.random() * 3 + 1 <= 2) {
      setTimeout(() => {
        resolve('No delay here, the flow is started');
      }, delay * 1000);
    } else {
      setTimeout(() => {
        reject('Unexpected case happened, the flow is stoped');
      }, delay * 1000);
    }
  });
}

function makeToys(response, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response === 'No delay here, the flow is started' && delay <= 3) {
        resolve('The toys are on the way to be produced');
      } else {
        reject('No production here, cancel the order');
      }
    }, delay * 1000);
  });
}

function deliverToys(prodTime, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (prodTime === 'The toys are on the way to be produced' && delay <= 2) {
        resolve('Your order is on the way!');
      } else {
        reject('Unpredictable case happened, delayd for 2 days, sorry');
      }
    }, delay * 1000);
  });
}

function sellToys(deliverTime, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (deliverTime === 'Your order is on the way!' && delay <= 1) {
        resolve('The toys were succesfully sold!');
      } else {
        reject('Toys have not been sold yet');
      }
    }, delay * 1000);
  });
}

mySetTimeOut(0)
  .then((result) => {
    console.log(result);
    return makeToys(result, 3);
  })
  .then((prodTime) => {
    console.log(prodTime);
    return deliverToys(prodTime, 2);
  })
  .then((deliverTime) => {
    console.log(deliverTime);
    return sellToys(deliverTime, 1);
  })
  .then((finalResult) => console.log(finalResult))
  .catch((error) => console.log(error));

// Async await syntax

function mySetTimeOut(del) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('No delay here, the flow is started');
    }, del * 1000);
  });
}

async function makeToys(response, delay) {
  await mySetTimeOut(delay);
  if (response === 'No delay here, the flow is started' && delay <= 3) {
    return 'The toys are on the way to be produced';
  } else {
    return 'No production here, cancel the order';
  }
}

async function deliverToys(prodTime, delay) {
  await mySetTimeOut(delay);
  if (prodTime === 'The toys are on the way to be produced' && delay <= 2) {
    return 'Your order is on the way!';
  } else {
    return 'Unpredictable case happened, delayd for 2 days, sorry';
  }
}

async function sellToys(deliverTime, delay) {
  await mySetTimeOut(delay);
  if (deliverTime === 'Your order is on the way!' && delay <= 1) {
    return 'The toys were succesfully sold!';
  } else {
    return 'Toys have not been sold yet';
  }
}

// Set different values for delays in each function to see various cases in console.log
async function finalResponse() {
  try {
    const statusOfDelay = await mySetTimeOut(0);
    console.log(statusOfDelay);
    const resultOfProduction = await makeToys(statusOfDelay, 3);
    console.log(resultOfProduction);
    const resultOFDelivery = await deliverToys(resultOfProduction, 2);
    console.log(resultOFDelivery);
    const resultOfSelling = await sellToys(resultOFDelivery, 1);
    console.log(resultOfSelling);
  } catch (error) {
    console.log(error);
  }
}

finalResponse();
