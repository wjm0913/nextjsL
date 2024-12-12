
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <b>我是全局导航嘿嘿</b>
        {children}
      </body>
    </html>
  );
}
