import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Dr. Uche Agwu | AI & Telecommunications Consultant",
  description:
    "Helping telecom and critical infrastructure organizations deploy trustworthy AI and advanced analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}