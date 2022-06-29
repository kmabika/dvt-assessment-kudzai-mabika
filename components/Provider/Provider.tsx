import { useEffect, useState } from "react";
import theme from "styles/theme";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";

const Provider = ({ children }: any) => {

  console.log(
    "\n %c Made with ❤️ by KudzaiM Codes %c https://kudzaim.codes/ %c %c 💎 \n\n","border: 1px solid #000;color: #000; background: #aaa000; padding:5px 0;","color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;","background: red; padding:5px 0;","color: #b0976d; background: #aaa000; padding:5px 0;"
  )
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );

  // prevents ssr flash
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }
  return body;
};

export default Provider;
