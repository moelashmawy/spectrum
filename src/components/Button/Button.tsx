import styled from "styled-components";

type Variant = "primary" | "secondary" | "success";

const getButtonColor = (variant?: Variant) => {
  switch (variant) {
    case "primary":
      return "#007bff";
    case "secondary":
      return "#6c757d";
    case "success":
      return "#28a745";
    default:
      return "#007bff";
  }
};

const Button = styled.button<{ variant?: Variant }>`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props) => getButtonColor(props.variant)};
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
