import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { revealAnimation } from "../../config/animations";

const contactChannels = [
  { href: "https://wa.me/5583998123331", label: "WhatsApp", detail: "+55 (83) 99812-3331", icon: <FaWhatsapp /> },
  { href: "mailto:henriquee.aze.dev@gmail.com", labelKey: "write", detail: "henriquee.aze.dev@gmail.com", icon: <FiMail /> },
  { href: "https://www.linkedin.com/in/henrique-azevedo-b2195b2b0/", label: "LinkedIn", detail: "/in/henrique-azevedo", icon: <FiLinkedin /> },
  { href: "https://github.com/henriiqueaze", label: "GitHub", detail: "@henriiqueaze", icon: <FiGithub /> },
];

export function ContactSection({ copy }) {
  return (
    <section className="contact" id="contact">
      <div className="contact-direct">
        <motion.div className="contact-copy" {...revealAnimation}>
          <p>{copy.contactLabel}</p><h2>{copy.contactQuestion}</h2><span>{copy.contactBody}</span>
        </motion.div>
        <motion.div className="contact-side" {...revealAnimation}>
          <p>{copy.choose}</p>
          <ul className="contact-channels">
            {contactChannels.map((channel, index) => (
              <li key={channel.href}>
                <a href={channel.href} target={channel.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span><strong>{channel.icon}{channel.labelKey ? copy[channel.labelKey] : channel.label}</strong><small>{channel.detail}</small></span>
                  <FiArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
