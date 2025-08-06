import { QRCodeSVG } from "qrcode.react";

export default function DomainQR() {
  const domainLink = "https://project-qr-gray.vercel.app/";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Scan to Contact on WhatsApp</h1>
      <QRCodeSVG value={domainLink} size={220} />
      <p className="mt-4 text-gray-600">{domainLink}</p>
    </div>
  );
}
