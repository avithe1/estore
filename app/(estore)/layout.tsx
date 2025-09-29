export default function RootLayout({
  children,
  productmodal,
}: Readonly<{
  children: React.ReactNode;
  productmodal: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      {productmodal}
    </div>
  );
}

