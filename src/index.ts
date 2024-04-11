import React from "react";
import { Resend } from "resend";

interface EmailOptions {
    from: string;
    to: string[] | string;
    subject: string;
    react?: React.ComponentType<any> | any;
    html?: string;
}

interface EmailSenderOptions {
    options: EmailOptions;
    apiKey: string;
}

export function useEmailSender({
    options, apiKey
} : EmailSenderOptions) {
    return async function sendEmail(): Promise<void> {
        const resend = new Resend(apiKey);

        const createOptions: any= {
            from: options.from,
            to: options.to,
            subject: options.subject,
            react: options.react,
            html: options.html
        };

        await resend.emails.send(createOptions);
    };
}
