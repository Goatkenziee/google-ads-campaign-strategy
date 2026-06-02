import './globals.css';

export const metadata = {
  title: 'Google Ads Campaign Strategy',
  description: 'A strategy for managing Google Ads campaigns.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}