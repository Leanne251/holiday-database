import holidays from '../data/holiday-data.js';

// import insertHoliday from '../db/scripts/insertHoliday';

// find all the holidays

export function getHolidays() {
	return holidays;
}

console.log(getHolidays());

export function getAHoliday(destination) {
	let findHoliday = holidays.find((element) => {
		if (element.destination.toLowerCase() === destination.toLowerCase()) {
			console.log('element', element);
			return element;
		}
	});

	if (findHoliday === undefined) {
		return 'Destination Not Found';
	} else {
		return findHoliday;
	}
}

// export async function postHoliday(body) {
// 	const destination = body.destination;
// 	const style = body.style;
// 	const price = body.price;

// 	const data = await query(insertHoliday);
// 	return data.rows;
// }

// console.log(getAHoliday("Turkey"));

// update a holiday

// function updateAHoliday(holidayToUpdate, newHolidayInfo){

//      let holidayID = holiday.findIndex(element => {
//          if (element.id === holidayToUpdate){
//              return true;
//          }
//      })
//      let updatedHoliday = holiday.splice(1,1, newHolidayInfo)
//      return updatedHoliday

// }

//     const selectedHoliday = holiday.findIndex((element) => {
//         if (element.id === newHolidayInfo.id){
//            } return true;
//         }

// console.log(updateAHoliday(2, {id:2, destination: "turkey", style: "beach", price: "1000"}))
