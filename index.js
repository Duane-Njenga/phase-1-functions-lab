// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber){
    return Math.abs(42- streetNumber);
}

function distanceFromHqInFeet(streetNumber){
    let blocks = distanceFromHqInBlocks(streetNumber);
    return (blocks * 264 );
}

function distanceTravelledInFeet(pickupStreet, destinationStreet){
    let blocks = Math.abs((destinationStreet - pickupStreet));
    let feet = (blocks * 264);
    return feet ;
}

function calculatesFarePrice(pickupStreet, destinationStreet){
    let blocks = Math.abs((destinationStreet - pickupStreet));
    let feet = (blocks * 264);
    if (feet <= 400 ){
        let fare = 0;
        return fare;
    }else if (feet <= 2000){
        feet = feet - 400;
        let fare = (feet * 0.02);
        return fare;
    }else if (feet <= 2500){
        const fare = 25;
        return fare;
    }else {
        return "cannot travel that far"
    }
}



