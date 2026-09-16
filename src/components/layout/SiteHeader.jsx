import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

export function SiteHeader({
  copy,
  language,
  theme,
  isMenuOpen,
  navigationHref,
  onLanguageToggle,
  onThemeToggle,
  onMenuOpen,
  onMenuClose,
}) {
  return (
    <>
      <header className="header">
        <a href={navigationHref("home")} className="logo" aria-label="Henrique Azevedo">
          H<span>/</span>A
        </a>
        <nav>
          {copy.nav.map(([label, id], index) => (
            <a href={navigationHref(id)} key={id}>
              <small>0{index + 1}</small>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button onClick={onLanguageToggle} aria-label={copy.language}>
            {language === "pt" ? "EN" : "PT"}
          </button>
          <button onClick={onThemeToggle} aria-label={copy.theme}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button className="menu-trigger" onClick={onMenuOpen} aria-label={copy.menu}>
            <FiMenu />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div>
              <span>H/A — 2026</span>
              <button onClick={onMenuClose}>{copy.close}<FiX /></button>
            </div>
            <nav>
              {copy.nav.map(([label, id], index) => (
                <a href={navigationHref(id)} key={id} onClick={onMenuClose}>
                  <small>0{index + 1}</small>
                  <span>{label}</span>
                  <FiArrowUpRight />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
