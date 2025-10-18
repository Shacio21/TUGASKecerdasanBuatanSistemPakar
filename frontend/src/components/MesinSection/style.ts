import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 100px 20px;
  background: #0f172a;
  color: #eaf3ff;
  text-align: center;
  min-height: 100vh;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 50px;
    color: #3b86e7;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const MachineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const MachineCard = styled.div<{ expanded: boolean }>`
  width: 100%;
  max-width: 700px;
  background: ${({ expanded }) => (expanded ? "#1e293b" : "#162032")};
  border-radius: 20px;
  padding: ${({ expanded }) => (expanded ? "30px" : "20px")};
  box-shadow: ${({ expanded }) =>
    expanded
      ? "0 12px 30px rgba(59, 134, 231, 0.4)"
      : "0 4px 20px rgba(0, 0, 0, 0.3)"};
  cursor: pointer;
  text-align: left;
  transition: all 0.35s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(59, 134, 231, 0.45);
  }
`;

export const MachineTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #5aa0ff;
  margin: 0 0 15px 0;
  text-align: center;
`;

export const MachineImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: 0 6px 15px rgba(59, 134, 231, 0.2);
`;

export const MachineDescription = styled.p`
  font-size: 0.95rem;
  color: #bcd3ff;
  line-height: 1.6;
`;

export const MaintenanceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 16px;
`;

export const MaintenanceItem = styled.li`
  margin-bottom: 14px;

  strong {
    display: block;
    color: #5aa0ff;
    margin-bottom: 5px;
    font-weight: 600;
  }

  p {
    color: #b7d3ff;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const SourceText = styled.p`
  margin-top: 20px;
  font-size: 0.85rem;
  color: #7ca8ff;
  font-style: italic;
  text-align: right;
`;
