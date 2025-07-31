import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pearls and ties",
  description: "Buy Cute and pretty accessories for your loved ones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}




