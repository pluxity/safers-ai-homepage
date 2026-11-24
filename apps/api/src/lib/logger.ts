import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, json } = winston.format;

// 로그를 화면 출력과 날짜별 파일(logs/application-2026-11-24.log)에 함께 남긴다
export const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }), json()),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      dirname: "logs",
      filename: "application-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxFiles: "365d", // 1년이 지난 파일은 지운다
    }),
  ],
});
