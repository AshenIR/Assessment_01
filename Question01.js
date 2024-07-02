
const jobTypes = {
    "A/C repairing": 100,
    "Plumbing": 60 
};

const technicianSchedule = {
    "Dave":  {
        "01.07.2024": [
                {"jobType": "A/C repairing", "startTime": "9.00 am", "endTime": "10.40 am"},
                {"jobType": "Plumbing", "startTime": "11.00 am", "endTime": "12.00 pm"},

        ]
    }
};

function findAvailableTimeSlots(jobType, date) {
    const availableTimeSlots = [];
    for (const technician in technicianSchedule) {
        if (technicianSchedule.hasOwnProperty(technician) ) {
            const appointments = technicianSchedule[technician];
            for (let i = 0; i < appointments.length; i++){
                if (appointments[i].jobType != jobType){
                    const startTime = appointments[i].endTime;
                    const endTime = calculateEndTime(startTime, jobTypes[jobType]);
                    availableTimeSlots.push({technician, startTime, endTime});
                }
                if (i < appointments.length - 1){
                    const startTime = appointments[i].endTime;
                    const endTime = appointments[i + 1].startTime;
                    availableTimeSlots.push({technician, startTime, endTime});
                }
            }
        }
    }
    return availableTimeSlots;
}