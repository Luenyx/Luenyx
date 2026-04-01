abstract class Calendar_Unit {
    private readonly value: number;

    protected constructor(value: number) {
        this.value = value;
    }
}

export class Day extends Calendar_Unit {
    public constructor(number: number) {
        super(number);
    }
}

export class Week extends Calendar_Unit {
    public constructor(number: number) {
        super(number);
    }
}

export class Month extends Calendar_Unit {
    public constructor(number: number) {
        super(number);
    }
}

export class Year extends Calendar_Unit {
    public constructor(number: number) {
        super(number);
    }
}

export class Date {
    private readonly day: Day;
    private readonly month: Month;
    private readonly year: Year;

    public constructor({ day, month, year }: { day: Day; month: Month; year: Year; }) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
