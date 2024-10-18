import humanizeDuration from "humanize-duration";
import { DateTime, Duration } from "luxon";

const HUMAN_READABLE_FORMAT = {
  ...DateTime.DATE_MED_WITH_WEEKDAY,
  ...DateTime.TIME_24_WITH_SECONDS,
};

export default class DateUtils {
  public static getCurrentTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  public static isLocaleUseAmPm(lang: string): boolean {
    return (
      new Intl.DateTimeFormat(lang, {
        hour: "numeric",
      })
        .formatToParts(new Date(2020, 0, 1, 13))
        .find((part) => part.type === "hour")?.value.length !== 2
    );
  }

  public static getHumanDate(
    date: Date | string | null | undefined,
    lang?: string,
    zone?: string
  ): string {
    if (!date) {
      return "";
    }
    let dt =
      date instanceof Date ? DateTime.fromJSDate(date) : DateTime.fromISO(date);
    if (zone) dt = dt.setZone(zone);
    return dt.setLocale(lang || "en").toLocaleString(HUMAN_READABLE_FORMAT);
  }

  public static getHumanDuration(
    date: Date | string | number | null | undefined,
    lang?: string,
    round = true
  ): string {
    if (!date) {
      return "";
    }
    let duration = 0;
    if (typeof date === "number") {
      duration = date;
    } else {
      const dt =
        date instanceof Date
          ? DateTime.fromJSDate(date)
          : DateTime.fromISO(date);
      const diff = dt.diffNow();
      duration = diff.as("seconds") * 1000;
    }
    return humanizeDuration(duration, {
      round,
      language: lang || "en",
      largest: 2,
    });
  }

  public static getSimpleDuration(seconds: number): string {
    if (seconds > 60 * 60) {
      return Duration.fromObject({ seconds }).toFormat("hh:mm:ss");
    } else {
      return Duration.fromObject({ seconds }).toFormat("mm:ss");
    }
  }

  public static humanizeSecondsDuration(
    seconds: number,
    lang?: string
  ): string {
    return humanizeDuration(seconds * 1000, {
      round: true,
      language: lang || "en",
      largest: 2,
    });
  }

  public static getDateMinusSeconds(seconds: number | null | undefined): Date {
    if (!seconds) {
      return new Date();
    }
    return DateTime.now().minus({ seconds }).toJSDate();
  }
}
