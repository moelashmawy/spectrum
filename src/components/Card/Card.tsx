import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const StyledInfoSection = styled.div<{ $isAlert?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 300px;
  background: rgba(51, 170, 51, 0.1);
  border-radius: 15px;
  padding: 20px;
  animation: ${(props) => props.$isAlert && "blinker 1s linear infinite"};

  @keyframes blinker {
    50% {
      box-shadow: 2px 2px 10px 10px rgb(255, 0, 0, 0.2);
      background: rgb(255, 0, 0, 0.3);
    }
  }

  .status {
    height: 30%;
  }

  .action-section {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
  }
`;

interface InfoSectionProps {
  statusMessage: string;
  isActionRequired: boolean;
  onUpdateClick?: () => void;
  onActClick?: () => void;
  isManual?: boolean;
}

const InfoCard: React.FC<InfoSectionProps> = ({
  statusMessage,
  isActionRequired,
  isManual,
  onActClick,
  onUpdateClick,
}) => {
  return (
    <StyledInfoSection $isAlert={!isManual && isActionRequired}>
      <p className="status">Status: {statusMessage}</p>
      {isActionRequired && (
        <div className="action-section">
          <div>Action Required</div>
          {!isManual && (
            <Button variant="success" onClick={onActClick}>
              Take Action
            </Button>
          )}
        </div>
      )}
      {isManual && <Button onClick={onUpdateClick}>Update Data</Button>}
    </StyledInfoSection>
  );
};

export default InfoCard;
