import { useForm } from 'react-hook-form';
import Header from '../components/Header';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Email sent:', data);
        // Reset form fields if needed
      } else {
        console.log('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-screen-xl m-auto pt-3">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" {...register('firstName')} required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" {...register('lastName')} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register('email')} required />
          </div>
          {/* Add CAPTCHA component here */}
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" {...register('message')} required></textarea>
          </div>
          <div>
            <label htmlFor="captcha">CAPTCHA:</label>
            <input type="text" id="captcha" {...register('captcha')} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default Contact;
