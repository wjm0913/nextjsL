
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*<b>我是app下的layout 文件</b>*/}
        {children}
      </body>
    </html>
  );
}
