import { socialmedia } from '../../config/socialmedia';
import { SectionContainer } from './SectionContainer';

export const Socials = () => {
  return (
    <SectionContainer>
      <div className="flex gap-1 justify-center">
        {socialmedia.map((sm) => (
          <a href={sm.url}>
            <img className="w-12 aspect-square" src={sm.imgurl} alt="" />
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};
