import { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppRedirect() {
  // Configurable WhatsApp number & message
  const whatsappNumber = "919591773588"; // update only here
  const defaultMessage = "Hi, I’m interested in your services!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = whatsappLink;
    }, 3000);
    return () => clearTimeout(timer);
  }, [whatsappLink]);

  return (
    <></>
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-6">
    //   <div className="relative bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center max-w-md w-full border border-gray-100">
    //     {/* Floating accents */}
    //     <div className="absolute -top-12 -left-12 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30"></div>
    //     <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

    //     <h1 className="text-3xl font-extrabold text-gray-800 mb-4 relative z-10">
    //       Redirecting to WhatsApp
    //     </h1>
    //     <p className="text-gray-600 mb-6 relative z-10">
    //       You’ll be redirected shortly. If not, use the button or QR code below.
    //     </p>

    //     {/* CTA Button */}
    //     <a
    //       href={whatsappLink}
    //       className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1 mb-6 relative z-10"
    //     >
    //       <FaWhatsapp className="text-2xl" />
    //       Open WhatsApp
    //     </a>

    //     {/* QR Code */}
    //     <div className="bg-gray-50 p-4 rounded-xl shadow-inner inline-block relative z-10">
    //       <QRCodeSVG value={whatsappLink} size={160} />
    //     </div>

    //     <p className="text-sm text-gray-500 mt-4 relative z-10">
    //       Scan the QR code to continue on WhatsApp
    //     </p>
    //   </div>
    // </div>
  );
}
