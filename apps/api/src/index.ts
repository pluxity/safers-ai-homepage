import { env } from "./config/env";
import { app } from "./app";

// 서버 시작
app.listen(env.PORT, () => {
  console.log(`api 서버 실행: http://localhost:${env.PORT}/api/health`);
});
