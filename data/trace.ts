export const requestHops = [
  { id: "client", label: "CLIENT", call: "POST /v1/request" },
  { id: "auth", label: "AUTH", call: "jwt.verify" },
  { id: "nest", label: "NESTJS", call: "pipeline.handle" },
  { id: "db", label: "POSTGRES", call: "query.exec" },
  { id: "lambda", label: "LAMBDA", call: "fn.invoke" },
  { id: "ws", label: "WEBSOCKET", call: "channel.emit" },
  { id: "ai", label: "AI SERVICE", call: "model.complete" },
  { id: "ok", label: "RESPONSE", call: "200 OK" },
] as const;
