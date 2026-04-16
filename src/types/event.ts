interface SQSRecord {
  body: string;
}

interface SQSEvent {
  Records: SQSRecord[];
}

export { SQSRecord, SQSEvent };