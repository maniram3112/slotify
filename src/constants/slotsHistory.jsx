const isSecondSaturday = (date) =>{
    const day = date.getDay();
    const dateNum = date.getDate();
    return day === 6 && dateNum > 7 && dateNum <= 14;
};

const isWeekendOrSecondSaturday = (date) => {
    const day = date.getDay();
    return day === 0 || isSecondSaturday(date);
};

const generateRandomDate = (start, end) =>{
    let date;
    do{
        date = new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );
    } while(isWeekendOrSecondSaturday(date));
    return date.toISOString().split('T')[0];
};

const today = new Date();
const next30Days = new Date(today);
next30Days.setDate(today.getDate() + 30);

const past30Days = new Date(today);
past30Days.setDate(today.getDate() - 30);

const slotsHistory = [
    {
        status : "upcoming",
        availSlots: [
            {
                service : "Apply for Credit Card",
                time : '10 am : 11 am',
                date: generateRandomDate(today, next30Days),
            },
            {
                service : "Loan Consultation",
                time : '10 am : 11 am',
                date: generateRandomDate(today, next30Days),
            },
            {
                service : "Meet Relationship Manager",
                time : '10 am : 11 am',
                date: generateRandomDate(today, next30Days),
            },
            {
                service : "Update KYC Information",
                time : '10 am : 11 am',
                date: generateRandomDate(today, next30Days),
            },
            {
                service : "Fixed Deposit Management",
                time : '10 am : 11 am',
                date: generateRandomDate(today, next30Days),
            },
        ]
    },
    {
        status : "completed",
        availSlots: [
            {
                service : "Open New Account",
                time : '10 am : 11 am',
                date: generateRandomDate(past30Days,  today),
            },
            {
                service : "Update KYC Information",
                time : '10 am : 11 am',
                date: generateRandomDate(past30Days,  today),
            },
            {
                service : "Fixed Deposit Management",
                time : '10 am : 11 am',
                date: generateRandomDate(past30Days,  today),
            },
        ]
    },
]

export default slotsHistory;