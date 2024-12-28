import type { FC, PropsWithChildren } from 'hono/jsx';

export const Layout: FC<{ title: string }> = ({
  title,
  children,
}: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="/static/css/main.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=keyboard_arrow_down"
        />
      </head>
      <body className="relative bg-purple-600">{children}</body>
      <script src="/static/js/main.js"></script>
    </html>
  );
};