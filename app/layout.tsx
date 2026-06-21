import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Dr. Uche Agwu | AI & Telecommunications Consultant",
  description:
    "Helping telecom and critical infrastructure organizations deploy trustworthy AI, advanced analytics, network optimization and next-generation wireless technologies.",
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
      </body>
    </html>
  );
}