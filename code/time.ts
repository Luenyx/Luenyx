abstract class Time_Unit {
    protected readonly value: number;

    protected constructor(value: number) {
        this.value = value;
    }

    public abstract to_milliseconds(): Millisecond;
    public abstract to_seconds(): Second;
    public abstract to_minutes(): Minute;
}

export class Millisecond extends Time_Unit {
    public constructor(number: number) {
        super(number);
    }

    public to_milliseconds(): Millisecond {
        return new Millisecond(this.value);
    }

    public to_seconds(): Second {
        return new Second(this.value / 1_000);
    }

    public to_minutes(): Minute {
        return new Minute(this.value / 60_000);
    }
}

export class Second extends Time_Unit {
    public constructor(number: number) {
        super(number);
    }

    public to_milliseconds(): Millisecond {
        return new Millisecond(this.value * 1_000);
    }

    public to_seconds(): Second {
        return new Second(this.value);
    }

    public to_minutes(): Minute {
        return new Minute(this.value / 60);
    }
}

export class Minute extends Time_Unit {
    public constructor(number: number) {
        super(number);
    }

    public to_milliseconds(): Millisecond {
        return new Millisecond(this.value * 60_000);
    }

    public to_seconds(): Second {
        return new Second(this.value * 60);
    }

    public to_minutes(): Minute {
        return new Minute(this.value);
    }
}

export class Duration {
    private readonly milliseconds: Millisecond;
    private readonly seconds: Second;
    private readonly minutes: Minute;

    public constructor({ milliseconds, seconds, minutes }: { milliseconds?: Time_Unit | number; seconds?: Time_Unit | number; minutes?: Time_Unit | number; }) {
        this.milliseconds = milliseconds instanceof Time_Unit ? milliseconds.to_milliseconds() : new Millisecond(milliseconds ?? 0);
        this.seconds = seconds instanceof Time_Unit ? seconds.to_seconds() : new Second(seconds ?? 0);
        this.minutes = minutes instanceof Time_Unit ? minutes.to_minutes() : new Minute(minutes ?? 0);
    }
}
