import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Gaming Hub! I'd like to check console availability and visit.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <a
      href="#whatsapp"
      onClick={(e) => {
        e.preventDefault();
        handleWhatsApp();
      }}
      className="whatsapp-launcher"
      aria-label="Chat with Gaming Hub on WhatsApp"
      title="Direct WhatsApp Chat"
    >
      <MessageCircle size={24} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
