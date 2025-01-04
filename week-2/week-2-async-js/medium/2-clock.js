// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// let seconds = 0;
// let minutes = 0;
// let hour = 0;

// function secCount(){
//     if (seconds<60){
//         seconds++;
//         console.log(`SS: ${seconds}`)
//         setTimeout(secCount, 1000); 
//     }
// }

// function minCount(){
//     if (minutes<60){
//         minutes++;
//         console.log(`MM: ${minutes}`)
//         setTimeout(minCount, 60000); 
//     }
// }

// function hrCount(){
//     if (hour<60){
//         hour++;
//         console.log(`HH: ${hour}`)
//         setTimeout(hrCount, 3600000); 
//     }
// }

// secCount();
// minCount();
// hrCount();


const clock = () => {
    const date = new Date();

    //24-hr format:
    const hour24 = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');

    //12-hr format:
    const hour12 = (date.getHours() % 12 || 12).toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    console.log(`24 hour format: ${hour24} : ${minutes} : ${seconds}`);
    console.log(`12 hour format: ${hour12} : ${minutes} : ${seconds} ${ampm}`);

    setTimeout(clock, 1000);
}

clock();