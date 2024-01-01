import '@/app/ui/global.css';
import { inter } from './ui/fonts';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body translate="no" className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
