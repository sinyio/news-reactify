import { useTheme } from "@/app/providers/ThemeProvider";
import { themeIcons } from "@/shared/assets";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div>
      <img
        src={isDark ? themeIcons.dark : themeIcons.light}
        width="30px"
        alt="theme"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeButton;
