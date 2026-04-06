import type { Immutable } from "../../core/mutability/immutable.ts";
import { Immutable_Days } from "./units/days.ts";
import { Immutable_Months } from "./units/months.ts";
import { Immutable_Years } from "./units/years.ts";
import type { Mutable } from "../../core/mutability/mutable.ts";
import type { Mutability } from "../../core/mutability/mutability.ts";

type Date_Constructor_Argument = {
    days: number | Immutable_Days;
    months: number | Immutable_Months;
    years: number | Immutable_Years;
};

const WEEKDAYS = [
    { shortened: "Mon", regular: "Monday" },
    { shortened: "Tue", regular: "Tuesday" },
    { shortened: "Wed", regular: "Wednesday" },
    { shortened: "Thu", regular: "Thursday" },
    { shortened: "Fri", regular: "Friday" },
    { shortened: "Sat", regular: "Saturday" },
    { shortened: "Sun", regular: "Sunday" }
] as const;
type Weekdays = typeof WEEKDAYS[number]["regular"];
type Shortened_Weekdays = typeof WEEKDAYS[number]["shortened"];

class Date_Base {
    public readonly type: "date" = "date" as const;
    protected readonly date: globalThis.Date;

    public constructor({ days, months, years }: Date_Constructor_Argument) {
        if (days instanceof Immutable_Days) {days = days.value;}
        if (months instanceof Immutable_Months) {months = months.value;}
        if (years instanceof Immutable_Years) {years = years.value;}
        this.date = new globalThis.Date(years, months - 1, days);
    }

    public get_weekday_name({ shortened }: { shortened?: false }): Weekdays;
    public get_weekday_name({ shortened }: { shortened: true }): Shortened_Weekdays;
    public get_weekday_name({ shortened }: { shortened?: boolean }): Weekdays | Shortened_Weekdays {
        let day: number = this.date.getDay();
        --day;
        if (day === -1) {day = 6;} // Shifting the builtin Sunday from 0 index back to the end (6) so the type hint starts at Monday.
        if (shortened) {return WEEKDAYS[day].shortened;}
        return WEEKDAYS[day].regular;
    }

    public get_day_of_month(): number {
        return this.date.getDate();
    }

    public get_month(): number {
        return this.date.getMonth() + 1;
    }

    public get_year(): number {
        return this.date.getFullYear();
    }
}

export class Immutable_Date extends Date_Base implements Immutable<Mutable_Date> {
    public readonly mutability: "immutable" = "immutable" as const;

    public as_mutable(): Mutable_Date {
        return new Mutable_Date({ days: this.date.getDate(), months: this.date.getMonth() + 1, years: this.date.getFullYear() });
    }
}

export class Mutable_Date extends Date_Base implements Mutable<Immutable_Date> {
    public readonly mutability: "mutable" = "mutable" as const;

    public as_immutable(): Immutable_Date {
        return new Immutable_Date({ days: this.date.getDate(), months: this.date.getMonth() + 1, years: this.date.getFullYear() });
    }
}

type Date_Constructor = {
    new(argument: Date_Constructor_Argument, mutability?: "immutable"): Immutable_Date;
    new(argument: Date_Constructor_Argument, mutability: "mutable"): Mutable_Date;
};

export const Date = function (this: unknown, argument: Date_Constructor_Argument, mutability: Mutability = "immutable") {
    return mutability === "mutable" ? 
        new Mutable_Date(argument) : 
        new Immutable_Date(argument);
} as unknown as Date_Constructor;
