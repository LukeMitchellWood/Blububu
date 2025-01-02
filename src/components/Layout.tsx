import type { FC, PropsWithChildren } from 'hono/jsx';

export const Layout: FC = (
  props: { pagetitle: string } & PropsWithChildren
) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.pagetitle}</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="/static/css/main.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=keyboard_arrow_down"
        />
      </head>
      <body className="relative overflow-x-hidden min-h-dvh bg-[url('/static/img/assets/ui/ui_background.png')]">
        {props.children}
      </body>
    </html>
  );
};
