import { formatDate } from "@/shared/helpers/formatDate.ts";
import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeProvider.tsx";
import ToggleTheme from "@/features/theme/ui/ToggleTheme.tsx";

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <ToggleTheme />
    </header>
  );
};

export default Header;
