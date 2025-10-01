export default function EstoreLayout({
  children,
  productmodal,
}: Readonly<{
  children: React.ReactNode;
  productmodal: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {productmodal}
    </>
  );
}

