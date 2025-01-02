import type { FC, PropsWithChildren } from 'hono/jsx';
import { SectionContainer } from './SectionContainer';

export const BugsDivider: FC = ({}: PropsWithChildren) => {
  return (
    <SectionContainer>
      <img
        className="w-full"
        src="/static/img/assets/ui/ui_divider.png"
        alt=""
      />
    </SectionContainer>
  );
};
