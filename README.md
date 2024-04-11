
# Email Sender Package

Send emails easily in Next.js, TypeScript, and Node.js projects using this simple package.

## Installation

Install the package via npm:

```bash
npm i email-client-hat

```

## Usage

Import the useEmailSender function and use it to send emails:

```bash
"use client";
import React, { useState } from 'react';
import { useEmailSender } from 'email-sender-package';

const EmailForm: React.FC = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const apiKey: string | undefined = process.env.RESEND_API_KEY;

  const sendEmail = useEmailSender({
    options: {
      from: 'sender@example.com',
      to: 'recipient@example.com',
      subject: 'Test Email',
      html: '<p>Hello, this is a test email.</p>'
    },
    apiKey: apiKey || '' // Provide a default value to prevent undefined apiKey
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail();
      setEmailSent(true);
      console.log('Email sent successfully');
    } catch (error) {
      setError(error);
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Send Email</button>
      </form>
      {emailSent && <p>Email sent successfully!</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default EmailForm;

```

Get your api key from [Resend](https://resend.com/)

Ensure that the api key is stored in an environment file named .env

```bash
RESEND_API_KEY = "resend_api_key_pasted_here"

```

## Configuration
### EmailOptions
```bash
    from: Sender email address.
    to: Recipient email address(es).
    subject: Email subject.
    react (optional): React component for the email body.
    html (optional): HTML content for the email body.
```

### EmailSenderOptions
```bash
    options: Email options.
    apiKey: API key for the email service provider.
```

## Example

Check out the example directory for a sample Next.js project using this package.

This is a github repository showcasing the proper usage of the above npm package. Clone it and utilize is as possible.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on GitHub.
