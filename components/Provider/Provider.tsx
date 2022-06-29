import { useEffect, useState } from "react";
import theme from "styles/theme";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";

const Provider = ({ children }: any) => {
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
