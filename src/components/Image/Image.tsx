import React from "react";
import styled from "styled-components";

const StyledImage = styled.img<{ $isAscending?: boolean }>`
  transform: ${(props) =>
    props.$isAscending ? "rotate(0deg)" : "rotate(90deg)"};
  transition: transform 0.3s ease-in-out;
`;

interface ImageProps {
  isAscending: boolean;
  image: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({
  isAscending,
  image,
  width = 60,
  height = 60,
}) => {
  return (
    <StyledImage
      height={height}
      width={width}
      src={image}
      $isAscending={isAscending}
    />
  );
};

export default Image;
