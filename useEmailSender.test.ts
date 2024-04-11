import { useEmailSender } from ".";
import { EmailSenderOptions } from ".";


// Mock Resend module
class MockResend {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async send(options: any): Promise<void> {
    // Mock sending email
  }
}

describe('useEmailSender', () => {
  it('sends an email', async () => {
    // Mock Resend module
    const mockApiKey = 'mock-api-key';
    const mockOptions: EmailSenderOptions = {
      options: {
        from: 'from@example.com',
        to: 'to@example.com', // Fix: 'to' should be a string, not an array
        subject: 'Test Email',
        react: undefined, // Fix: Provide a valid value or undefined for 'react'
        html: '<p>This is a test email.</p>',
      },
      apiKey: mockApiKey,
    };

    // Call the hook
    const sendEmail = useEmailSender(mockOptions);

    // Mock Resend's email sending method
    const mockResend = jest.spyOn(MockResend.prototype, 'send');
    mockResend.mockResolvedValueOnce(); // Fix: Provide a resolved value as expected by mockResolvedValueOnce

    // Call sendEmail function
    await sendEmail();

    // Assert that Resend's send method was called with the correct arguments
    expect(mockResend).toHaveBeenCalledWith({
      from: 'from@example.com',
      to: 'to@example.com',
      subject: 'Test Email',
      react: undefined,
      html: '<p>This is a test email.</p>',
    });
  });
});
