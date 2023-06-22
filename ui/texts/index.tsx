import styled from "styled-components";

export const DarkHeading = styled.h1<HeadingProps>`
  color: var(--black-main);
  text-align: ${(props) => props.position};
  font-size: 48px;
  margin: 0;
`;

export const LightHeading = styled(DarkHeading)`
  color: white;
`;

export const Subtitle = styled.h2`
  color: var(--black-main);
  margin: 0;
`;

export const ThinSubtitle = styled(Subtitle)`
  font-weight: 400;
`;

export const LightSubtitle = styled(Subtitle)`
  color: white;
`;

export const LgTextBold = styled.h3`
  margin: 0;
  font-size: 20px;
`;

export const LgTextThin = styled(LgTextBold)`
  font-weight: 400;
`;

export const MdText = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const MdTextBold = styled(MdText)`
  font-weight: 600;
`;

export const TinyMdText = styled(MdText)`
  font-weight: 300;
`;
export const SmText = styled(MdText)`
  font-size: 14px;
`;
export const TinySmText = styled(SmText)`
  font-weight: 300;
`;

export const Label = styled.label`
  font-size: 15px;
  align-self: flex-start;
`;

export const MainLink = styled.p`
  font-size: 15px;
  cursor: pointer;
  color: var(--secondary-color);
  margin: 0;
`;
