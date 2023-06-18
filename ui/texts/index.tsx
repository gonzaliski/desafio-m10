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

export const LargeTextBold = styled.h3`
  font-size: 20px;
  margin: 0;
`;

export const LargeTextThin = styled(LargeTextBold)`
  font-weight: 400;
`;

export const MediumText = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const MediumTextBold = styled(MediumText)`
  font-weight: 600;
`;

export const TinyText = styled(MediumText)`
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
