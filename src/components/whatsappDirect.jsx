import { useEffect } from "react";

export default function WhatsAppRedirect() {
  useEffect(() => {
    const fetchNumber = async () => {
      try {
        // load number from a config file on your hosting
        const res = await fetch("/config.json");
        const data = await res.json();

        const whatsappNumber = data.number;
        const defaultMessage = "Hi, I’m interested in your services!";
        const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

        window.location.href = link;
      } catch (error) {
        console.error("Error loading WhatsApp number:", error);
        document.body.innerHTML = `
          <div class="min-h-screen flex items-center justify-center bg-gray-100">
            <p class="text-lg font-semibold text-gray-700">
              Unable to redirect. Please try again later.
            </p>
          </div>`;
      }
    };

    fetchNumber();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <p className="text-gray-600 text-lg">Redirecting to WhatsApp...</p>
    </div>
  );
}


// import { useEffect } from "react";

// export default function TelegramRedirect() {
//   useEffect(() => {
//     const fetchTelegram = async () => {
//       try {
//         // load Telegram username or link from config.json
//         const res = await fetch("/config.json?_=" + Date.now());
//         const data = await res.json();

//         const telegramUser = data.telegramUser; // e.g. "mychannel" or "username"
//         const defaultMessage = data.message || "Hi, I’m interested in your services!";
        
//         // Build Telegram link
//         const link = `https://t.me/${telegramUser}?start=${encodeURIComponent(defaultMessage)}`;

//         window.location.href = link;
//       } catch (error) {
//         console.error("Error loading Telegram info:", error);
//         document.body.innerHTML = `
//           <div class="min-h-screen flex items-center justify-center bg-gray-100">
//             <p class="text-lg font-semibold text-gray-700">
//               Unable to redirect. Please try again later.
//             </p>
//           </div>`;
//       }
//     };

//     fetchTelegram();
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
//       <p className="text-gray-600 text-lg">Redirecting to Telegram...</p>
//     </div>
//   );
// }


// import { useEffect } from "react";

// export default function CallRedirect() {
//   useEffect(() => {
//     const fetchNumber = async () => {
//       try {
      
//         const res = await fetch("/config.json?_=" + Date.now());
//         const data = await res.json();

//         const phoneNumber = data.number;
//         window.location.href = `tel:${phoneNumber}`;
//       } catch (error) {
//         console.error("Error loading phone number:", error);
//         document.body.innerHTML = `
//           <div class="min-h-screen flex items-center justify-center bg-gray-100">
//             <p class="text-lg font-semibold text-gray-700">
//               Unable to redirect. Please try again later.
//             </p>
//           </div>`;
//       }
//     };

//     fetchNumber();
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
//       <p className="text-gray-600 text-lg">Opening phone dialer...</p>
//     </div>
//   );
// }


