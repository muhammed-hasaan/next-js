// app/layout.js
import "./globals.css";
import { DropdownProvider } from "../../context/DropdownContext";

export const metadata = {
  title: "My Application",
  description: "Description of the app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DropdownProvider>{children}</DropdownProvider>
      </body>
    </html>
  );
}
