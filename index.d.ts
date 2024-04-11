import React from 'react';

export interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  react?: React.ComponentType<any>;
  html?: string;
}

export interface EmailSenderOptions {
  options: EmailOptions;
  apiKey: string;
}

export function useEmailSender({ options, apiKey }: EmailSenderOptions): () => Promise<void>;
