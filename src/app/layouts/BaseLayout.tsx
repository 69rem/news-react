import { useTheme } from "@/app/providers/ThemeProvider.tsx";
import Header from "@/widgets/header/ui/Header/Header.tsx";
import MainPage from "@/pages/main/ui/Page.tsx";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}

export default BaseLayout;
