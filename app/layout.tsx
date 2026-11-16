import './globals.css';

export const metadata = {
  title: 'Nancy Matsuda — Product Builder',
  description: 'Hands-on product builder focused on discovery, empathy, experimentation and digital experiences across AI, marketplaces, commerce and healthcare.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>
}
