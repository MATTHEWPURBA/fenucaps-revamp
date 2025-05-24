// utils/whatsapp.js
export const openWhatsApp = (message = "Halo, saya ingin konsultasi tentang ASI Booster Fenucaps") => {
    const phoneNumber = "6281234567890"; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };
  // src/utils/whatsapp.js