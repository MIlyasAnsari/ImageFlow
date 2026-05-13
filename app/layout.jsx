export const metadata = {
  title: "ImageFlow",
  description: "Turn images into stunning videos instantly"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
