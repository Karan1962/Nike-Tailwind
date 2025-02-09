import { useTheme } from "../context/ThemeProvider.jsx";
import { modes } from "../constants/index.js";
import { moon, sun } from "@/assets/icons/index.js";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar.jsx";

const Theme = () => {
  const { mode, theme, setMode } = useTheme();
  console.log(`current mode : ${mode}, current theme ${theme}`);

  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <img
              src={`${theme === "dark" ? moon : sun}`}
              alt="theme"
              className={`${theme === "dark" ? "dark_theme" : "active-theme"}`}
              height={16}
              width={16}
            />
          </MenubarTrigger>
          <MenubarContent className="min-w-[120px] absolute right-[-3rem] bg-[white] px-2 py-[10px] dark:bg-[#18192a] dark:text-[#dddddd] border-none">
            {modes.map((item) => {
              return (
                <MenubarItem
                  key={item.id}
                  className={`flex items-center gap-4  rounded hover:bg-[#f1f1f1] cursor-pointer dark:hover:bg-[#262732]`}
                  onClick={() => {
                    if (item.value !== "system") {
                      localStorage.setItem("theme", item.value);
                      setMode(item.value);
                      return;
                    }
                    localStorage.removeItem("theme");
                    setMode(item.value);
                    return;
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.id}
                    width={20}
                    height={20}
                    className={`${mode === item.value && "active-theme"}`}
                  />
                  <p
                    className={`${
                      mode === item.value ? "text-coral-red" : ""
                    } font-semibold`}
                  >
                    {item.value}
                  </p>
                </MenubarItem>
              );
            })}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Theme;
