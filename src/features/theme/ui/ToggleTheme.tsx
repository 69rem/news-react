import { themeIcons } from "@/shared/assets";
import { useTheme } from "@/app/providers/ThemeProvider.tsx";

const ToggleTheme = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      height={30}
      alt="theme"
      onClick={toggleTheme}
    />
  );
};

export default ToggleTheme;
