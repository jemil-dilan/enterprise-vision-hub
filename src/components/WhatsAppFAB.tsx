import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const PHONE = "237600000000"; // TODO: real number

const WhatsAppFAB = () => (
  <motion.a
    href={`https://wa.me/${PHONE}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp D&C Agro"
    initial={{ opacity: 0, scale: 0.6, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-card-hover"
    style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
  >
    <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }} />
    <MessageCircle size={26} className="relative" />
  </motion.a>
);

export default WhatsAppFAB;