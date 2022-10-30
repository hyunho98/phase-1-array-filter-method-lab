// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(driver) {
        for (let i = 0; i < name.length; i++) {
            if (driver[i].toUpperCase() !== name[i].toUpperCase())
                return false;
        }
        return true;
    });
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toUpperCase() === name.toUpperCase());
}

